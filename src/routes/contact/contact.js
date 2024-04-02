const contactRouter = require("express").Router();
const postContact = require("../../controllers/api/contact/postContact");

contactRouter.post("/contacts", postContact);

module.exports = contactRouter;
