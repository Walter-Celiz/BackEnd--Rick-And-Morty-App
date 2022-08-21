/* 
files routes
route characters and route episodes
*/

const { Router } = require("express");

const CharacterRoutes = require("./characters");
const EpisodesRoutes = require("./episodes");

const router = Router();

//url
router.use("/character", CharacterRoutes);
router.use("/episodes", EpisodesRoutes);

module.exports = router;
