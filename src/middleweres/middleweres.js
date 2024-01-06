const cors = require("cors");

const middleweres = (app, express) => {
  app.use(cors());
  app.use(express.json());
};

module.exports = middleweres;
