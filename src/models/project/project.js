const { model, Schema } = require("mongoose");

const projectSchema = Schema({
  image: { type: String, required: true },
  project_name: { type: String, required: true },
  details: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  live_link: { type: String, required: true },
  client_code: { type: String, required: true },
  server_code: { type: String, required: true },
});

const Projects = model("Project", projectSchema, "projects");
module.exports = Projects;
