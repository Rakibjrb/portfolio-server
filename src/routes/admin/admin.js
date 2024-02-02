const adminRoutes = require("express").Router();
const { contacts } = require("../../controllers/api/admin/contacts");
const statistics = require("../../controllers/api/admin/statistics");

adminRoutes.get("/admin/statistics", statistics);
adminRoutes.get("/admin/contacts", contacts);

module.exports = adminRoutes;
