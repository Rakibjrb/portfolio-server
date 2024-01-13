const router = require("express").Router();
const getProjects = require("../../controllers/api/projects/getProjects");
const getProjectsByCategory = require("../../controllers/api/projects/getProjectsByCategory");
const getSingleProject = require("../../controllers/api/projects/getSingleProject");
const postProject = require("../../controllers/api/projects/postProject");
const projectsCount = require("../../controllers/api/projects/projectsCount");

router.get("/projects", getProjects);
router.get("/projects/:id", getSingleProject);
router.get("/projects/tabs/:category", getProjectsByCategory);
router.post("/projects", postProject);
router.get("/projects-count", projectsCount);

module.exports = router;
