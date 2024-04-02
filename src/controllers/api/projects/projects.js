const Projects = require("../../../models/project/project");

const latestProjects = async (req, res, next) => {
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

const project = async (req, res, next) => {
  const reqId = req.params.id;
  try {
    const project = await Projects.findOne({ _id: reqId });
    res.send(project);
  } catch (error) {
    next(error);
  }
};

const getProjectsByCategory = async (req, res, next) => {
  const category = req.params.category;
  try {
    if (category === "all") {
      const projects = await Projects.find(
        {},
        "_id image project_name live_link client_code server_code"
      ).sort({
        date: -1,
      });
      res.send(projects);
    } else if (
      category === "mern" ||
      category === "frontend" ||
      category === "basic" ||
      category === "pending"
    ) {
      const projects = await Projects.find(
        { category },
        "_id image project_name live_link client_code server_code"
      ).sort({
        date: -1,
      });
      res.send(projects);
    } else {
      res.send([]);
    }
  } catch (error) {
    next(error);
  }
};

const projectsCount = async (req, res, next) => {
  try {
    const total = await Projects.countDocuments({});
    res.send({
      total,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  latestProjects,
  project,
  getProjectsByCategory,
  projectsCount,
};
