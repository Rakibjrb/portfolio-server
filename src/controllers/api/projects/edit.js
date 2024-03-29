const Projects = require("../../../models/project/project");

const likeProject = async (req, res, next) => {
  const id = req.params.id;
  const like = req.body.like + 1;
  try {
    const liked = await Projects.updateOne({ _id: id }, { recected: like });
    res.send(liked);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  likeProject,
};
