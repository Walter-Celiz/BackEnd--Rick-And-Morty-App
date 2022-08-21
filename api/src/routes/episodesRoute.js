const { Router } = require("express");

const episodeController = require("../controllers/episodesController");

const router = Router();

router.get("/:id", episodeController.getCharacterById);
router.get("/", episodeController.getAllCharacters);
router.post("/", episodeController.addCharacter);
router.put("/:id", episodeController.updateCharacter);
router.delete("/:id", episodeController.deleteCharacter);

module.exports = router;
