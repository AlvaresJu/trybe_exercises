const express = require('express');
const morgan = require('morgan');
require('express-async-errors');

const checkAuthorization = require('./middlewares/checkAuthorization');
const checkSignupInfo = require('./middlewares/checkSignupInfo');
const handleError = require('./middlewares/handleError');
// const validateCreatedAt = require('./middlewares/validateCreatedAt');
// const validateDescription = require('./middlewares/validateDescription');
// const validateDifficulty = require('./middlewares/validateDifficulty');
// const validateName = require('./middlewares/validateName');
// const validatePrice = require('./middlewares/validatePrice');
// const validateRating = require('./middlewares/validateRating');
const validateActivity = require('./utils/activityValidator');
const generateToken = require('./utils/generateToken');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// validação tradicional:
// app.post('/activities',
//   checkAuthorization,
//   validateName,
//   validatePrice,
//   validateDescription,
//   validateCreatedAt,
//   validateRating,
//   validateDifficulty,
//   (_req, res) => {
//     res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
// });

// validação com o joi:
app.post('/activities', checkAuthorization, validateActivity, (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

app.post('/signup', checkSignupInfo, (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

app.use(handleError);

module.exports = app;
