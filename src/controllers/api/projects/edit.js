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

const removeLatest = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const info = {
      type: "old",
    };
    const removed = await Projects.updateOne({ _id }, info);
    res.send(removed);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  likeProject,
  removeLatest,
};
