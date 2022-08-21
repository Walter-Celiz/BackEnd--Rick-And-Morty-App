/* 
files routes
route characters and route episodes
*/

const { Router } = require("express");

//route definition
const CharacterRoutes = require("./charactersRoute");
const EpisodesRoutes = require("./episodesRoute");

const router = Router();

//url
router.use("/character", CharacterRoutes);
router.use("/episode", EpisodesRoutes);

module.exports = router;
