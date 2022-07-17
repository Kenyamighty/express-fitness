const express = require("express");
const specialEventsController = express.Router();

//we can make our middleware ourselves
// app.use((req, res, next) => {
//     console.log("8.4 Is the coolest!")
//     next();
// })
const specialEventsControllerData = require("../models/special-event.model.js")

specialEventsController.get("/", (req, res) => {
    res.json(specialEventsControllerData)
})

module.exports = specialEventsController;