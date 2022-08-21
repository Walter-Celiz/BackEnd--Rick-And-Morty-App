const { Router } = require("express");
const { Character } = require('../models')
const { v4: uuidv4 } = require('uuid')

const router = Router();

router.get("/", (req, res) => {
    return Character.findAll()
        .then(characters => res.send(characters))
        .catch((error) => next(error))
});

router.get("/:id", (req, res, next) => {
    const id = req.params.id
    return Character.findByPk(id)
        .then(character => res.send(character))
        .catch((error) => next(error))
});

router.post("/", (req, res, next) => {
    const character = req.body
    return Character.create({
        ...character,
        id: uuidv4()
    })
        .then(character => res.send(character))
        .catch((error) => next(error))
});

router.put("/:id", (req, res, next) => {
    const id = req.params.id
    const character = req.body
    return Character.update(character, {
        where: {
            id,
        },
    }).then((updatedCharacter) => {
        res.send(updatedCharacter)
    })
        .catch((error) => next(error))
});

router.delete("/:id", (req, res, next) => {
    const id = req.params.id
    return Character.destroy({
        where: {
            id,
        },
    })
        .then(() => {
            res.sendStatus(200)
        })
        .catch((error) => next(error))
});

module.exports = router;
