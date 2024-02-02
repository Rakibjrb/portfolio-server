const Contacts = require("../../../models/contact/contact");

const contacts = async (req, res, next) => {
  try {
    const contacts = await Contacts.find({}, "name date");
    res.send(contacts);
  } catch (error) {
    next(error);
  }
};
module.exports = { contacts };
