const express = require("express");
const app = express();
const checkHealth = require("./controllers/health/health");
const handleErrors = require("./controllers/handleErrors/handleErrors");
const invalidRoute = require("./controllers/handleErrors/invalidRoute");
const middleweres = require("./middleweres/middleweres");
const contactRouter = require("./routes/contact/contact");
const projectRouter = require(".//routes/projects/projects");
const token = require("./routes/token/token");
const adminRoutes = require("./routes/admin/admin");
const linksRouter = require("./routes/links/links");

app.get("/", checkHealth);

//middlewere functions
middleweres(app, express);

//token middle wares
app.use(token);

//app routes
app.use(linksRouter);
app.use(projectRouter);
app.use(contactRouter);
app.use(adminRoutes);

//server error handling part
app.all("*", invalidRoute);
app.use(handleErrors);

module.exports = app;
