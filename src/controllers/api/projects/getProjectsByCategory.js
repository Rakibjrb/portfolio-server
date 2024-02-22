const Projects = require("../../../models/project/project");

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

module.exports = getProjectsByCategory;
