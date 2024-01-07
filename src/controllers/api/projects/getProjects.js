const Projects = require("../../../models/project/project");

const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.send(projects);
  } catch (error) {
    next(error);
  }
};

module.exports = getProjects;
