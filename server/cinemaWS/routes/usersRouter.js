const express = require("express")
const router = express.Router()

const usersBL = require("../BL/usersBL")

router.get("/", async function (req, resp, next) {
    try {
        let allUsers = await usersBL.getAllUsers()
        return resp.json(allUsers)
    } catch (error) {
        next(error)
    }
})


router.get("/:id", async function (req, resp, next) {
    try {
        let id = req.params.id;
        let user = await usersBL.getUserByID(id)
        return resp.json(user)
    } catch (error) {
        next(error)
    }
})

router.post("/", async function (req, resp, next) {
    try {
        let obj = req.body;
        let status = await usersBL.addUser(obj)
        return resp.json(status)
    } catch (error) {
        next(error)
    }
})

router.put("/:id", async function (req, resp, next) {
    try {
        let id = req.params.id;
        let obj = req.body;
        let status = await usersBL.editUser(id, obj)
        return resp.json(status)
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", async function (req, resp, next) {
    try {
        let id = req.params.id;
        let status = await usersBL.deleteUser(id)
        return resp.json(status)
    } catch (error) {
        next(error)
    }
})

module.exports = router;