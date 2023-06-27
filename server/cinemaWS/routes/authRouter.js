const express = require("express")
const router = express.Router()
const { authLogin, createAccount, authLogout } = require("../BL/authBL");


router.post("/login", authLogin);
router.post("/create-account", createAccount);
router.post("/logout", authLogout);



module.exports = router;