const { v4: uuidv4 } = require("uuid");

class ModelCrud {
    constructor(model) {
        this.model = model
    }

    getCharacterById = (req, res, next) => {
        const id = req.params.id;
        return this.model.findByPk(id)
            .then((result) => res.send(result))
            .catch((error) => next(error));
    }

    getAllCharacters = (req, res) => {
        return this.model.findAll()
            .then((results) => res.send(results))
            .catch((error) => next(error));
    }

    addCharacter = (req, res, next) => {
        const body = req.body;
        return this.model.create({
            ...body,
            id: uuidv4(),
        })
            .then((updatedElement) => res.send(updatedElement))
            .catch((error) => next(error));
    }

    updateCharacter = (req, res, next) => {
        const id = req.params.id;
        const body = req.body;
        return this.model.update(body, {
            where: {
                id,
            },
        })
            .then((updatedCharacter) => {
                res.send(updatedCharacter);
            })
            .catch((error) => next(error));
    }

    deleteCharacter = (req, res, next) => {
        const id = req.params.id;
        return this.model.destroy({
            where: {
                id,
            },
        })
            .then(() => {
                res.sendStatus(200);
            })
            .catch((error) => next(error));
    }
}

module.exports = ModelCrud








