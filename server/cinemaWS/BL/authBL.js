const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const usersBL = require("../BL/usersBL")

let RSA_PRIVATE_KEY = crypto.randomBytes(64).toString('hex'); //יצירת מפתח אבטחה אקראי


const authLogin = async (req, res, next) => {
    try {
        let userName = req.body.userName;
        let password = req.body.password;

        let allUsers = await usersBL.getAllUsers()
        let userData = allUsers.find(user => user.userName == userName && user.password == password)

        if (!userData) {
            res.status(401).json({ message: "Incorrect login information" })
        }

        else {

            const userID = userData._id;
            const userRole = userData.role;

            const tokenData = jwt.sign(
                { id: userID, role: userRole },
                RSA_PRIVATE_KEY,
                { expiresIn: `${userData.sessionTimeOut}m` }
            )

            res.status(200).json({ token: tokenData, connectedUser: userData })

        }
    } catch (error) {
        next(error)
    }

};

const createAccount = async (req, res, next) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;

        const allUsers = await usersBL.getAllUsers()
        let userIsExist = allUsers.find(user => user.userName == userName)

        if (!userIsExist) {
            return res.status(404).json({ message: "Username does not exist!" })
        }
        const passwordIsExist = allUsers.find(user => user.password === password)
        if (passwordIsExist) {
            return res.status(400).json({ message: "This user already exists in the system!" })
        }
        let userUpdated = { ...userIsExist, password: password };
        const status = await usersBL.editUser(userUpdated._id, userUpdated)
        if (status === "updated!") {
            res.status(200).json({ message: "This user's password has been updated!" })
        }
       
    }
    catch (err) {
        next(err)
    }

}

const authLogout = async (req, res, next) => {
    try {
        RSA_PRIVATE_KEY = crypto.randomBytes(64).toString('hex'); // מפתח אבטחה חדש בהתנתקות
        res.status(200).json({ message: "User disconnected successfully" });
    }
    catch (err) {
        next(err)
    }

}


const authenticateToken = async (req, res, next) => {
    let token = req.headers['x-access-token'];

    try {
        if (!token) {
            return res.status(401).json({ message: "No token provided." })
        }

        jwt.verify(token, RSA_PRIVATE_KEY, async function (err, decoded) {
            if (err)
                return res.status(500).json({ message: "Failed to authenticate token." })

            else {
                req.userConnect = {
                    id: decoded.id,
                    role: decoded.role
                }
                next();
            }
        })
    }
    catch (err) {
        next(err);
    }
};

const checkUserRole = (role) => (req, res, next) => {  //בדיקת תפקיד היוזר כדי לדעת אילו דפים להציג לו ואיזה לא
    const userRole = req.userConnect.role;
    if (userRole !== role) {
        return res.status(403).json({ message: `Access forbidden. Required role: ${role}` });
    }
    next();
};


module.exports = { authLogin, createAccount, authLogout, authenticateToken, checkUserRole };
