const handleError = (err, _req, res, _next) => {
  const { statusCode, message } = err;
  console.log(`Error: ${message}`);
  if (statusCode) {
    res.status(statusCode).json({ message });
  } else {
    res.status(500).json({ message });
  }
};

module.exports = handleError;
