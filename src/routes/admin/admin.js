const adminRoutes = require("express").Router();
const {
  contacts,
  contactsById,
  deleteContact,
} = require("../../controllers/api/admin/contacts");
const statistics = require("../../controllers/api/admin/statistics");

adminRoutes.get("/admin/statistics", statistics);
adminRoutes.get("/admin/contacts", contacts);
adminRoutes.get("/admin/contacts/:id", contactsById);
adminRoutes.delete("/admin/contacts/:id", deleteContact);

module.exports = adminRoutes;
