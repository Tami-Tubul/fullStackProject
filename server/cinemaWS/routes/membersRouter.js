const express = require("express")
const router = express.Router()

const membersBL = require("../BL/membersBL")
const { authenticateToken } = require("../BL/authBL");


router.get("/", authenticateToken, async function (req, resp, next) {
    try {
        let allMembers = await membersBL.getAllMembers()
        return resp.json(allMembers)

    } catch (error) {
        next(error)

    }

})


router.get("/:id", authenticateToken, async function (req, resp, next) {
    try {
        let id = req.params.id;
        let member = await membersBL.getMemberByID(id)
        return resp.json(member)

    } catch (error) {
        next(error)
    }

})

router.post("/", authenticateToken, async function (req, resp, next) {
    try {

        let obj = req.body;
        let status = await membersBL.addMember(obj)
        return resp.json(status)

    } catch (error) {
        next(error)
    }

})

router.put("/:id", authenticateToken, async function (req, resp, next) {
    try {

        let id = req.params.id;
        let obj = req.body;
        let status = await membersBL.updateMember(id, obj)
        return resp.json(status)

    } catch (error) {
        next(error)
    }

})


router.delete("/:id", authenticateToken, async function (req, resp, next) {
    try {

        let id = req.params.id;
        let status = await membersBL.deleteMember(id)
        return resp.json(status)

    } catch (error) {
        next(error)
    }

})

module.exports = router;