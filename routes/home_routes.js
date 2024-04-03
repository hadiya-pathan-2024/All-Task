const express = require("express");
const app = express.Router();
const authentication = require("../middleware/authentication.js");

const { home_route } = require("../controllers/home_controller.js");

//home
app.get('/home', home_route)

module.exports = app;