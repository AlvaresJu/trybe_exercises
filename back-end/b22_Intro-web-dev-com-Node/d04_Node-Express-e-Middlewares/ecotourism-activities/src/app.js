const express = require('express');
const morgan = require('morgan');
const handleError = require('./middlewares/handleError');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDescription = require('./middlewares/validateDescription');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateRating = require('./middlewares/validateRating');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(validateName);
app.use(validatePrice);
app.use(validateDescription);
app.use(validateCreatedAt);
app.use(validateRating);
app.use(validateDifficulty);

app.post('/activities', (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

app.use(handleError);

module.exports = app;
