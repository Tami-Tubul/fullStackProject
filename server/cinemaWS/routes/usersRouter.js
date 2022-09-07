const express = require("express")
const router = express.Router()

const usersBL = require("../models/usersBL")

router.get("/", async function (req, resp) {
    let allUsers = await usersBL.getAllUsers()
    return resp.json(allUsers)
})


router.get("/:id", async function (req, resp) {
    let id = req.params.id;
    let user = await usersBL.getUserByID(id)
    return resp.json(user)
})

router.post("/",async function(req,resp){
   let obj = req.body;
   let status = await usersBL.addUser(obj)
   return resp.json(status)
})

router.put("/:id", async function (req, resp) {
    let id = req.params.id;
    let obj = req.body;
    let status = await usersBL.editUser(id,obj)
    return resp.json(status)
})

router.delete("/:id", async function(req,resp){
    let id = req.params.id;
    let status = await usersBL.deleteUser(id)
    return resp.json(status)
})

module.exports = router;