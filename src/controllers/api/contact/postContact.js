const Contacts = require("../../../models/contact/contact");

const postContact = async (req, res, next) => {
  try {
    const contactData = req.body;
    const posted = await Contacts.create(contactData);
    res.send(posted);
  } catch (error) {
    next(error);
  }
};

module.exports = postContact;
