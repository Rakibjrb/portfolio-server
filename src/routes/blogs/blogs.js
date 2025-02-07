const blogsRoute = require("express").Router();
const {
  getAllBlogs,
  getLatestBlogs,
  postBlog,
} = require("../../controllers/api/blogs/blogs");

blogsRoute.get("/blogs/:id", getAllBlogs);
blogsRoute.get("/latest/blogs", getLatestBlogs);
blogsRoute.post("/blogs", postBlog);

module.exports = blogsRoute;
