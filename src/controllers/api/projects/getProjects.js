const Projects = require("../../../models/project/project");

const getProjects = async (req, res, next) => {
  try {
    const projects = await Projects.find(
      { type: "latest" },
      "_id image project_name live_link client_code server_code"
    ).sort({
      date: -1,
    });
    res.send(projects);
  } catch (error) {
    next(error);
  }
};

module.exports = getProjects;
