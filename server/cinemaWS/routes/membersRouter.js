const express = require("express")
const router = express.Router()

const membersBL = require("../BL/membersBL")

router.get("/", async function (req, resp, next) {
    try {
        let allMembers = await membersBL.getAllMembers()
        return resp.json(allMembers)

    } catch (error) {
        next(error)

    }

})


router.get("/:id", async function (req, resp, next) {
    try {
        let id = req.params.id;
        let member = await membersBL.getMemberByID(id)
        return resp.json(member)

    } catch (error) {
        next(error)
    }

})

router.post("/", async function (req, resp, next) {
    try {

        let obj = req.body;
        let status = await membersBL.addMember(obj)
        return resp.json(status)

    } catch (error) {
        next(error)
    }

})

router.put("/:id", async function (req, resp, next) {
    try {

        let id = req.params.id;
        let obj = req.body;
        let status = await membersBL.updateMember(id, obj)
        return resp.json(status)

    } catch (error) {
        next(error)
    }

})


router.delete("/:id", async function (req, resp, next) {
    try {

        let id = req.params.id;
        let status = await membersBL.deleteMember(id)
        return resp.json(status)

    } catch (error) {
        next(error)
    }

})

module.exports = router;