require("dotenv").config();
const jwt = require("jsonwebtoken");

const createToken = (req, res, next) => {
  const adminInfo = req.body;
  try {
    const token = jwt.sign(adminInfo, process.env.Secure_Token, {
      expiresIn: "1h",
    });
    res.send({
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createToken;
