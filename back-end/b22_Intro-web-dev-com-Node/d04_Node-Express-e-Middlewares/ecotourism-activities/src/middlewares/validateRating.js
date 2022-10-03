const validateRating = (req, _res, next) => {
  const { rating } = req.body.description;
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    const err = { statusCode: 400,
      message: 'O campo rating deve ser um número inteiro entre 1 e 5' };
    next(err);
  } else {
    next();
  }
};

module.exports = validateRating;
