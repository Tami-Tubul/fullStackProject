const express = require("express")
const router = express.Router()
const { authLogin } = require("../BL/authBL");


router.post("/login", authLogin)


module.exports = router;