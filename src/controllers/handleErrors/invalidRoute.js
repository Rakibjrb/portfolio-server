const invalidRoute = (req, res, next) => {
  const error = new Error(`Route not found : ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

module.exports = invalidRoute;
