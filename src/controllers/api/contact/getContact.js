const Contacts = require("../../../models/contact/contact");

const getContact = async (req, res, next) => {
  try {
    const contacts = await Contacts.find();
    res.send(contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = getContact;
