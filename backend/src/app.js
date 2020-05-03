require("dotenv/config");
const app = require("express")();

const routes = require("config/routes");

app.use("/", routes);

module.exports = app;
