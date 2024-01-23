const Projects = require("../../../models/project/project");

const likeProject = async (req, res, next) => {
  const id = req.params.id;
  const like = req.body.like;
  try {
    const liked = like + 1;
    const project = await Projects.updateOne({ _id: id }, { recected: liked });
    res.send(project);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  likeProject,
};
