const  express = require("express");
const persons = express.Router();

const personsData = require("../models/person.model.js");

persons.get("/persons")

persons.get("/", (req, res) => {
    res.json(personsData)
})

module.exports = persons;