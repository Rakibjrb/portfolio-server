const handleErrors = (err, _req, res, _next) => {
  res.status(err.status || 500).send({
    message: `Error : ${err.message}` || "Internal Server Error",
    status: err.status || 500,
    error: err.errors,
  });
};
module.exports = handleErrors;
