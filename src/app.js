const express = require("express");
const app = express();
const checkHealth = require("./controllers/health/health");
const handleErrors = require("./controllers/handleErrors/handleErrors");
const invalidRoute = require("./controllers/handleErrors/invalidRoute");
const middleweres = require("./middleweres/middleweres");
const contact = require("./routes/contact/contact");
const projects = require(".//routes/projects/projects");
const token = require("./routes/token/token");

app.get("/", checkHealth);

//middlewere functions
middleweres(app, express);

//token middle wares
app.use(token);

//app routes
app.use(projects);
app.use(contact);

//server error handling part
app.all("*", invalidRoute);
app.use(handleErrors);

module.exports = app;
