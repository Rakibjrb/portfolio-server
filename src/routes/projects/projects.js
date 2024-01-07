const router = require("express").Router();
const getProjects = require("../../controllers/api/projects/getProjects");

router.get("/projects", getProjects);

module.exports = router;
