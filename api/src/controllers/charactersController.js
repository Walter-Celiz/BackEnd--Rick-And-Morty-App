const { Character } = require("../models");

const ModelCrud = require("./index")

const characterController = new ModelCrud(Character)

module.exports = characterController
