const { Router } = require("express");

const router = Router();

router.get("/", (req, res, next) => {
    /* res.send("Soy la ruta Episodes"); */
    try {
        throw new Error("rompimos todo chango")
    } catch (error) {
        next(error)
    }
});

module.exports = router;
