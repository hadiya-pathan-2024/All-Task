const express = require("express");
const routes_app = express.Router();

const register_routes = require("./register_routes");
const home_routes = require("./home_routes");
const tasks_routes = require("./tasks_routes");

routes_app.use("/", register_routes);
routes_app.use("/", home_routes);
routes_app.use("/", tasks_routes);

module.exports = routes_app;