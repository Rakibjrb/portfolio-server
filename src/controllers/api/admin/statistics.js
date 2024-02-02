const Contacts = require("../../../models/contact/contact");
const Projects = require("../../../models/project/project");

const statistics = async (req, res, next) => {
  try {
    const contacts = await Contacts.estimatedDocumentCount();
    const totalProjects = await Projects.estimatedDocumentCount();
    const resected = await Projects.aggregate([
      {
        $group: {
          _id: null,
          totalResected: { $sum: "$recected" },
        },
      },
    ]);
    res.send({
      totalProjects,
      totalResected: resected[0].totalResected,
      contacts,
    });
  } catch (error) {
    console.log("error from statistics", error);
    next(error);
  }
};

module.exports = statistics;
