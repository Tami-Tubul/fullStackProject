const express = require("express")
const router = express.Router();

const subscriptionsBL = require("../BL/subscriptionsBL");

router.get("/", async function (req, resp) {
   let allMembers = await subscriptionsBL.getAllSubscriptions();
   return resp.json(allMembers);
})

router.get("/:id", async function (req, resp) {
   let id = req.params.id;
   let member = await subscriptionsBL.getSubscriptionByID(id);
   return resp.json(member);
})

router.post("/", async function (req, resp) {
   let obj = req.body;
   let status = await subscriptionsBL.addSubscription(obj);
   return resp.json(status);
})

router.put("/:id", async function (req, resp) {
   let id = req.params.id;
   let obj = req.body;
   let status = await subscriptionsBL.updateSubscription(id, obj);
   return resp.json(status);
})

router.delete("/:id", async function (req, resp) {
   let id = req.params.id;
   let status = await subscriptionsBL.deleteSubscription(id);
   return resp.json(status);
})

module.exports = router;