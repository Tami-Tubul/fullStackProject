const express = require("express")
const router = express.Router()
const { authLogin, authLogout } = require("../BL/authBL");


router.post("/login", authLogin);
router.post("/logout", authLogout);



module.exports = router;