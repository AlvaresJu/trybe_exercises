const validateName = (req, _res, next) => {
  const { name } = req.body;
  if (!name) {
    const err = { statusCode: 400, message: 'O campo name é obrigatório' };
    next(err);
  } else if (name.length < 4) {
    const err = { statusCode: 400, message: 'O campo name deve ter pelo menos 4 caracteres' };
    next(err);
  } else {
    next();
  }
};

module.exports = validateName;
