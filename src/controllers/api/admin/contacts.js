const Contacts = require("../../../models/contact/contact");

const contacts = async (req, res, next) => {
  try {
    const contacts = await Contacts.find({}, "name date status");
    res.send(contacts);
  } catch (error) {
    next(error);
  }
};

const contactsById = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Contacts.updateOne({ _id: id }, { status: "viewed" });
    const contact = await Contacts.findOne({ _id: id });
    res.send(contact);
  } catch (error) {
    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Contacts.deleteOne({ _id: id });
    res.send({ delete: true });
  } catch (error) {
    next(error);
  }
};

module.exports = { contacts, contactsById, deleteContact };
