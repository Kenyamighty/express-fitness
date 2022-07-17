const express = require("express");
const locations = express.Router();

const locationsData = require("../models/location.model.js");

locations.get("/location");

locations.get("/", (req, res) =>{
    res.json(locationsData)
})

module.exports = locations;
