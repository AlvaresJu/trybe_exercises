const validateDifficulty = (req, _res, next) => {
  const { difficulty } = req.body.description;
  const difficultyoptions = ['Fácil', 'Médio', 'Difícil'];
  if (!difficultyoptions.some((option) => option === difficulty)) {
    const err = { statusCode: 400,
      message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' };
    next(err);
  } else {
    next();
  }
};

module.exports = validateDifficulty;
