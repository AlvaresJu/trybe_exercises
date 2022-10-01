const validateTeam = (req, _res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    next(); // Chama o próximo middleware
  } else {
    const err = {
      statusCode: 400,
      message: 'request data properties must include "nome" and "sigla"',
    };
    next(err);
  }
};

module.exports = validateTeam;
