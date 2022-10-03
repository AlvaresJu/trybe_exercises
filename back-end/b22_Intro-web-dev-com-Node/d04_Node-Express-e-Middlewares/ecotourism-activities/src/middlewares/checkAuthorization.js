const checkAuthorization = (req, _res, next) => {
  const authorization = req.header('Authorization');
  if (!authorization || authorization.length !== 16) {
    const err = { statusCode: 401, message: 'Token inválido!' };
    next(err);
  } else {
    next();
  }
};

module.exports = checkAuthorization;
