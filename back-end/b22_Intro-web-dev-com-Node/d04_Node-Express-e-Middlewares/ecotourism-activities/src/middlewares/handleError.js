const handleError = (err, _req, res, _next) => {
  const { statusCode, message } = err;
  console.log(message);
  res.status(statusCode).json({ message });
};

module.exports = handleError;
