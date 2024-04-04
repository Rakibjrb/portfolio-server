const { model, Schema } = require("mongoose");

const linksSchema = Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

const Links = model("Links", linksSchema, "links");
module.exports = Links;
