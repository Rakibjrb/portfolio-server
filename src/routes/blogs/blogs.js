const blogsRoute = require("express").Router();
const { getAllBlogs } = require("../../controllers/api/blogs/blogs");

blogsRoute.get("/api/blogs/:id", getAllBlogs);

module.exports = blogsRoute;
