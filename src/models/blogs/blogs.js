const { model, Schema } = require("mongoose");

const blogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    published_date: { type: String, required: true },
  },
  thumbnail_image: { type: String, required: true },
  like: { type: Number },
  comments: [
    {
      commenter: {
        name: { type: String },
        published_date: { type: String },
      },
    },
  ],
  type: { type: String },
});

const Blogs = model("Blogs", blogSchema, "blogs");
module.exports = Blogs;
