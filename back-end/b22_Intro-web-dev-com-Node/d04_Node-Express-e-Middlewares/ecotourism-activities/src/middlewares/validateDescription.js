const validateDescription = (req, _res, next) => {
  const { description } = req.body;
  if (!description) {
    const err = { statusCode: 400, message: 'O campo description é obrigatório' };
    return next(err);
  }

  const descriptionKeys = ['createdAt', 'rating', 'difficulty'];
  for (let i = 0; i < descriptionKeys.length; i += 1) {
    if (description[descriptionKeys[i]] === undefined) {
      const err = { statusCode: 400, message: `O campo ${descriptionKeys[i]} é obrigatório` };
      return next(err);
    }
  }

  next();
};

module.exports = validateDescription;
