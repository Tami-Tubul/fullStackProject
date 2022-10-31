const express = require("express")
const router = express.Router()

const jwt = require("jsonwebtoken")

const usersBL = require("../models/usersBL")

router.post("/login", async function (req, resp) {

    let userName = req.body.userName;
    let password = req.body.password;
    
    let allUsers = await usersBL.getAllUsers()
    let userData = allUsers.find(user => user.userName == userName && user.password == password)
    
    if(!userData){
        resp.status(401).send({ message: "Incorrect login information" })
    }
    
    else{

        const userID = userData._id;
        const RSA_PRIVATE_KEY = "somekey"

        const tokenData = jwt.sign(
            { id: userID },
            RSA_PRIVATE_KEY,
            { expiresIn: userData.sessionTimeOut }
        )

         resp.status(200).send({ token: tokenData, connectedUser: userData })

    }
    

})


// router.get("/", async function (req, resp) {

//     const RSA_PRIVATE_KEY = "somekey";
//     let token = req.headers['x-access-token'];

//     if (!token) {
//         return resp.status(401).send({ message: "No token provided." })
//     }

//     jwt.verify(token, RSA_PRIVATE_KEY, async function (err, decoded) {
//         if (err)
//             return resp.status(500).send({ message: "Failed to authenticate token." })

//         else {

//             let allUsers = await usersBL.getAllUsers()
//             return resp.status(200).json(allUsers)

//         }

//     })


// })


module.exports = router;