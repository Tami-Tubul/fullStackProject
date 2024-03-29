const express = require("express")
const router = express.Router();

const moviesBL = require("../BL/moviesBL");
const { authenticateToken } = require("../BL/authBL");

router.get("/", authenticateToken, async function (req, resp, next) {
   try {
      let allMembers = await moviesBL.getAllMovies();
      return resp.json(allMembers);
   } catch (error) {
      next(error)
   }
})

router.get("/:id", authenticateToken, async function (req, resp, next) {
   try {
      let id = req.params.id;
      let member = await moviesBL.getMovieByID(id);
      return resp.json(member);
   } catch (error) {
      next(error)
   }
})

router.post("/", authenticateToken, async function (req, resp, next) {
   try {
      let obj = req.body;
      let status = await moviesBL.addMovie(obj);
      return resp.json(status);
   } catch (error) {
      next(error)
   }
})

router.put("/:id", authenticateToken, async function (req, resp, next) {
   try {
      let id = req.params.id;
      let obj = req.body;
      let status = await moviesBL.updateMovie(id, obj);
      return resp.json(status);
   } catch (error) {
      next(error)
   }
})

router.delete("/:id", authenticateToken, async function (req, resp, next) {
   try {
      let id = req.params.id;
      let status = await moviesBL.deleteMovie(id);
      return resp.json(status);
   } catch (error) {
      next(error)
   }
})

module.exports = router;