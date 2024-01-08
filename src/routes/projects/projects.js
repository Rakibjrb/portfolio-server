const router = require("express").Router();
const getProjects = require("../../controllers/api/projects/getProjects");
const getSingleProject = require("../../controllers/api/projects/getSingleProject");

router.get("/projects", getProjects);
router.get("/projects/:id", getSingleProject);

module.exports = router;
