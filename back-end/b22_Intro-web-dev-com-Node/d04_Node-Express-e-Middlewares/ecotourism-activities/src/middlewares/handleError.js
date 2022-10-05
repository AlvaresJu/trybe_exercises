const handleError = (err, _req, res, _next) => {
  const { statusCode, message } = err;
  console.log(`Error: ${message}`);
  res.status(statusCode || 500).json({ message });
};

module.exports = handleError;
