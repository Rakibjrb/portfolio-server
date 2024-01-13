const Projects = require("../../../models/project/project");

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
module.exports = projectsCount;
