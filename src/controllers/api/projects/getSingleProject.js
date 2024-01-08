const Projects = require("../../../models/project/project");

const getSingleProject = async (req, res) => {
  try {
    const reqId = req.params.id;
    const project = await Projects.find({ _id: reqId });
    res.send(project);
  } catch (error) {
    next(error);
  }
};

module.exports = getSingleProject;
