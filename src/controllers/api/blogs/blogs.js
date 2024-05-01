const Blogs = require("../../../models/blogs/blogs");

const getAllBlogs = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const query = req.query;
    if (_id == "all") {
      const blogs = await Blogs.find({}).skip(query.skip).limit(9);
      return res.send(blogs);
    }
    const blog = await Blogs.findOne({ _id });
    return res.send(blog);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBlogs };
