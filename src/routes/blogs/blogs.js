const blogsRoute = require("express").Router();
const {
  getAllBlogs,
  getLatestBlogs,
} = require("../../controllers/api/blogs/blogs");

blogsRoute.get("/blogs/:id", getAllBlogs);
blogsRoute.get("/latest/blogs", getLatestBlogs);

module.exports = blogsRoute;
