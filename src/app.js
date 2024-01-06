const express = require("express");
const app = express();
const checkHealth = require("./controllers/health/health");
const handleErrors = require("./controllers/handleErrors/handleErrors");
const invalidRoute = require("./controllers/handleErrors/invalidRoute");

app.get("/", checkHealth);

//server error handling part
app.all("*", invalidRoute);
app.use(handleErrors);

module.exports = app;
