const { Router } = require("express");

const episodeController = require("../controllers/episodesController");

const router = Router();

router.get("/:id", episodeController.getById);
router.get("/", episodeController.getAll);
router.post("/", episodeController.add);
router.put("/:id", episodeController.update);
router.delete("/:id", episodeController.delete);

module.exports = router;
