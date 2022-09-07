const express = require("express")
const router = express.Router();

const moviesBL = require("../models/moviesBL");

router.get("/", async function (req, resp) {
   let allMembers = await moviesBL.getAllMovies();
   return resp.json(allMembers);
})

router.get("/:id", async function (req, resp) {
   let id = req.params.id;
   let member = await moviesBL.getMovieByID(id);
   return resp.json(member);
})

router.post("/", async function (req, resp) {
   let obj = req.body;
   let status = await moviesBL.addMovie(obj);
   return resp.json(status);
})

router.put("/:id", async function (req, resp) {
   let id = req.params.id;
   let obj = req.body;
   let status = await moviesBL.updateMovie(id, obj);
   return resp.json(status);
})

router.delete("/:id", async function (req, resp) {
   let id = req.params.id;
   let status = await moviesBL.deleteMovie(id);
   return resp.json(status);
})

module.exports = router;