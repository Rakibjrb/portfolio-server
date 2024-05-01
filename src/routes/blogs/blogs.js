const blogsRoute = require("express").Router();
const {
  getAllBlogs,
  getLatestBlogs,
} = require("../../controllers/api/blogs/blogs");

blogsRoute.get("/api/blogs/:id", getAllBlogs);
blogsRoute.get("/api/latest/blogs", getLatestBlogs);

module.exports = blogsRoute;
