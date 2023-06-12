const express = require("express")
const router = express.Router();

const subscriptionsBL = require("../BL/subscriptionsBL");
const { authenticateToken } = require("../BL/authBL");

router.get("/", authenticateToken, async function (req, resp, next) {
   try {
      let allMembers = await subscriptionsBL.getAllSubscriptions();
      return resp.json(allMembers);
   } catch (error) {
      next(error)
   }
})

router.get("/:id",authenticateToken, async function (req, resp, next) {
   try {
      let id = req.params.id;
      let member = await subscriptionsBL.getSubscriptionByID(id);
      return resp.json(member);
   } catch (error) {
      next(error)
   }
})

router.post("/", authenticateToken,async function (req, resp, next) {
   try {
      let obj = req.body;
      let status = await subscriptionsBL.addSubscription(obj);
      return resp.json(status);
   } catch (error) {
      next(error)
   }
})

router.put("/:id", authenticateToken,async function (req, resp, next) {
   try {
      let id = req.params.id;
      let obj = req.body;
      let status = await subscriptionsBL.updateSubscription(id, obj);
      return resp.json(status);
   } catch (error) {
      next(error)
   }
})

router.delete("/:id", authenticateToken, async function (req, resp, next) {
   try {
      let id = req.params.id;
      let status = await subscriptionsBL.deleteSubscription(id);
      return resp.json(status);
   } catch (error) {
      next(error)
   }
})

module.exports = router;