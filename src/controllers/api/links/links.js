const Links = require("../../../models/links/links");

const getLinks = async (req, res, next) => {
  try {
    const links = await Links.find({});
    res.send(links);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getLinks,
};
