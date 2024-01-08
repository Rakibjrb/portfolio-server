const Projects = require("../../../models/project/project");

const getSingleProject = async (req, res) => {
  const reqId = req.params.id;
  try {
    const project = await Projects.findOne({ _id: reqId });
    res.send(project);
  } catch (error) {
    next(error);
  }
};

module.exports = getSingleProject;
