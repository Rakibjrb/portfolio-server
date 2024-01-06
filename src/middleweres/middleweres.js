require("dotenv").config();
const cors = require("cors");

const middleweres = (app, express) => {
  app.use(
    cors({
      origin: [process.env.Origin],
      credentials: true,
    })
  );
  app.use(express.json());
};

module.exports = middleweres;
