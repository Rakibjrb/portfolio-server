const router = require("express").Router();
const getContact = require("../../controllers/api/contact/getContact");
const postContact = require("../../controllers/api/contact/postContact");

router.post("/contacts", postContact);

module.exports = router;
