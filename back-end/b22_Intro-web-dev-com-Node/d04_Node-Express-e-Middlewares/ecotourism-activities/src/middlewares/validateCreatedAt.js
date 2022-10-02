const validateCreatedAt = (req, _res, next) => {
  const { createdAt } = req.body.description;
  const validDateFormat = /^(([0-2][1-9])|(3[01]))\/((0[1-9])|(1[0-2]))\/\d{4}$/;
  if (!validDateFormat.test(createdAt)) {
    const err = { statusCode: 400, message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' };
    next(err);
  } else {
    next();
  }
};

module.exports = validateCreatedAt;
