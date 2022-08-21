const { Router } = require("express");

const characterController = require("../controllers/charactersController");

const router = Router();

router.get("/:id", characterController.getCharacterById);
router.get("/", characterController.getAllCharacters);
router.post("/", characterController.addCharacter);
router.put("/:id", characterController.updateCharacter);
router.delete("/:id", characterController.deleteCharacter);

module.exports = router;
