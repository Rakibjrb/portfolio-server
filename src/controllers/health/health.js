const checkHealth = (req, res, next) => {
  try {
    res.send({
      status: 200,
      message: "Server working fine",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = checkHealth;
