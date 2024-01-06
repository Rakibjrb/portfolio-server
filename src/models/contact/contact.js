const { model, Schema } = require("mongoose");

const contactSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

const Contacts = model("Contact", contactSchema, "contact");
module.exports = Contacts;
