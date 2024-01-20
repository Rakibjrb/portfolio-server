const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;

  try {
    console.log(token);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = verifyToken;
