const Projects = require("../../../models/project/project");

const postProject = async (req, res, next) => {
  const data = req.body;
  try {
    const uploaded = await Projects.create(data);
    res.send(uploaded);
  } catch (error) {
    next(error);
  }
};

module.exports = postProject;
