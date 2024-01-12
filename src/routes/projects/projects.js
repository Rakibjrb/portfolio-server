const router = require("express").Router();
const getProjects = require("../../controllers/api/projects/getProjects");
const getProjectsByCategory = require("../../controllers/api/projects/getProjectsByCategory");
const getSingleProject = require("../../controllers/api/projects/getSingleProject");

router.get("/projects", getProjects);
router.get("/projects/:id", getSingleProject);
router.get("/projects/tabs/:category", getProjectsByCategory);

module.exports = router;
