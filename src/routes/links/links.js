const { getLinks } = require("../../controllers/api/links/links");

const linksRouter = require("express").Router();

linksRouter.get("/important/links", getLinks);

module.exports = linksRouter;
