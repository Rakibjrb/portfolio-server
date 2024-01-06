const express = require("express");
const app = express();
const checkHealth = require("./controllers/health/health");
const handleErrors = require("./controllers/handleErrors/handleErrors");
const invalidRoute = require("./controllers/handleErrors/invalidRoute");
const middleweres = require("./middleweres/middleweres");
const contact = require("./routes/contact/contact");

app.get("/", checkHealth);

//middlewere functions
middleweres(app, express);

app.use(contact);

//server error handling part
app.all("*", invalidRoute);
app.use(handleErrors);

module.exports = app;
