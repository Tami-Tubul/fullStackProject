const express = require("express")
const router = express.Router()

const membersBL = require("../models/membersBL")

router.get("/", async function (req, resp) {
    let allMembers = await membersBL.getAllMembers()
    return resp.json(allMembers)
})


router.get("/:id", async function (req, resp) {
    let id = req.params.id;
    let member = await membersBL.getMemberByID(id)
    return resp.json(member)
})

router.post("/", async function (req, resp) {
        let obj = req.body;
        let status = await membersBL.addMember(obj)
        return resp.json(status)
})

router.put("/:id", async function (req, resp) {
    let id = req.params.id;
    let obj = req.body;
    let status = await membersBL.updateMember(id,obj)
    return resp.json(status)
})


router.delete("/:id", async function (req, resp) {
    let id = req.params.id;
    let status = await membersBL.deleteMember(id)
    return resp.json(status)
})

module.exports = router;