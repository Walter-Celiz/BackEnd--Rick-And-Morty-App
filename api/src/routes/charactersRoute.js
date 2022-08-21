const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.send("Soy la ruta Characters");
});

module.exports = router;
