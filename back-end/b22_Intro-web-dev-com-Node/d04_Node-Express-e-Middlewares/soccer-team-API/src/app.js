const express = require('express');
require('express-async-errors'); // não precisa definir uma variável
const morgan = require('morgan');
const cors = require('cors');
// require no nosso novo router
const teamsRouter = require('./routes/teamsRouter');
const handleError = require('./middlewares/error');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('src/images'));
app.use(express.json());
// monta o router na rota /teams
app.use('/teams', teamsRouter);

app.use((_req, res) => res.sendStatus(404));

app.use(handleError);

module.exports = app;
