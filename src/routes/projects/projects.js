const projectRouter = require("express").Router();
const {
  likeProject,
  removeLatest,
} = require("../../controllers/api/projects/edit");
const {
  latestProjects,
  project,
  getProjectsByCategory,
  projectsCount,
} = require("../../controllers/api/projects/projects");
const postProject = require("../../controllers/api/projects/postProject");

projectRouter.get("/latest-projects", latestProjects);
projectRouter.get("/projects/:id", project);
projectRouter.get("/projects/tabs/:category", getProjectsByCategory);
projectRouter.put("/projects/add-like/:id", likeProject);
projectRouter.get("/projects-count", projectsCount);

//routes for admin
projectRouter.post("/projects", postProject);
projectRouter.put("/remove-from-latest/:id", removeLatest);

module.exports = projectRouter;
