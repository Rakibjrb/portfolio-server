const Projects = require("../../../models/project/project");

const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find(
      {},
      "_id image project_name live_link client_code server_code"
    );
    res.send(projects);
  } catch (error) {
    next(error);
  }
};

module.exports = getProjects;
