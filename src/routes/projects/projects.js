const projectRouter = require("express").Router();
const { likeProject } = require("../../controllers/api/projects/edit");
const {
  projects,
  project,
  getProjectsByCategory,
  projectsCount,
} = require("../../controllers/api/projects/projects");
const postProject = require("../../controllers/api/projects/postProject");

projectRouter.get("/projects", projects);
projectRouter.get("/projects/:id", project);
projectRouter.get("/projects/tabs/:category", getProjectsByCategory);
projectRouter.put("/projects/add-like/:id", likeProject);
projectRouter.get("/projects-count", projectsCount);

//routes for admin
projectRouter.post("/projects", postProject);

module.exports = projectRouter;
