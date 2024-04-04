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

const changeProjectType = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const type = req.body.type;
    if (type === "old") {
      const removed = await Projects.updateOne({ _id }, { type: "old" });
      res.send(removed);
    } else if (type === "latest") {
      const removed = await Projects.updateOne({ _id }, { type: "latest" });
      res.send(removed);
    } else {
      res.send({
        message: "something went wrong !!!",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  likeProject,
  changeProjectType,
};
