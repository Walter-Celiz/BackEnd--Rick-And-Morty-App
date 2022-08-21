const { Character } = require("../models");
const { v4: uuidv4 } = require("uuid");

function getCharacterById(req, res, next) {
    const id = req.params.id;
    return Character.findByPk(id)
        .then((character) => res.send(character))
        .catch((error) => next(error));
}

function getAllCharacters(req, res) {
    return Character.findAll()
        .then((characters) => res.send(characters))
        .catch((error) => next(error));
}

function addCharacter(req, res, next) {
    const character = req.body;
    return Character.create({
        ...character,
        id: uuidv4(),
    })
        .then((character) => res.send(character))
        .catch((error) => next(error));
}

function updateCharacter(req, res, next) {
    const id = req.params.id;
    const character = req.body;
    return Character.update(character, {
        where: {
            id,
        },
    })
        .then((updatedCharacter) => {
            res.send(updatedCharacter);
        })
        .catch((error) => next(error));
}

function deleteCharacter(req, res, next) {
    const id = req.params.id;
    return Character.destroy({
        where: {
            id,
        },
    })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => next(error));
}

module.exports = {
    getAllCharacters,
    getCharacterById,
    addCharacter,
    deleteCharacter,
    updateCharacter,
};
