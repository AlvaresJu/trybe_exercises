const validatePrice = (req, _res, next) => {
  const { price } = req.body;
  if (price === undefined) {
    const err = { statusCode: 400, message: 'O campo price é obrigatório' };
    next(err);
  } else if (typeof price !== 'number' || price < 0) {
    const err = { statusCode: 400, 
      message: 'O campo price deve ser um número maior ou igual a zero' };
    next(err);
  } else {
    next();
  }
};

module.exports = validatePrice;
