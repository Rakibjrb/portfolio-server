const adminRoutes = require("express").Router();
const statistics = require("../../controllers/api/admin/statistics");

adminRoutes.get("/admin/statistics", statistics);

module.exports = adminRoutes;
