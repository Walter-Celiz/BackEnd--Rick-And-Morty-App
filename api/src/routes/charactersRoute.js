const { Router } = require("express");

const {
    getAllCharacters,
    getCharacterById,
    addCharacter,
    deleteCharacter,
    updateCharacter,
} = require("../controllers/charactersController");

const router = Router();

router.get("/:id", getCharacterById);
router.get("/", getAllCharacters);
router.post("/", addCharacter);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);

module.exports = router;
