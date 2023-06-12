const jwt = require("jsonwebtoken");
const usersBL = require("../BL/usersBL")

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
            const RSA_PRIVATE_KEY = "somekey"

            const tokenData = jwt.sign(
                { id: userID },
                RSA_PRIVATE_KEY,
                { expiresIn: `${userData.sessionTimeOut}m` }
            )

            res.status(200).json({ token: tokenData, connectedUser: userData })

        }
    } catch (error) {
        next(error)
    }

};

const authenticateToken = async (req, res, next) => {
    const RSA_PRIVATE_KEY = "somekey";
    let token = req.headers['x-access-token'];
    console.log(token);

    try {
        if (!token) {
            return res.status(401).json({ message: "No token provided." })
        }

        jwt.verify(token, RSA_PRIVATE_KEY, async function (err, decoded) {
            if (err)
                return res.status(500).json({ message: "Failed to authenticate token." })

            else {
                next();
            }
        })
    }
    catch (err) {
        next(err);
    }
};

module.exports = { authLogin, authenticateToken };
