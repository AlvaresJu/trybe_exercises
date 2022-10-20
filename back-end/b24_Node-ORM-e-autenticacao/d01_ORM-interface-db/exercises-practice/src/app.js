const express = require('express');
require('express-async-errors');

const BookController = require('./controllers/book.controller');

const app = express();
app.use(express.json());

app.get('/books', BookController.getAll);
app.get('/books/:id', BookController.getById);

app.use((err, _req, res, _next) => {
  const { status, message } = err;
  if (!status) {
    console.log(message);
    console.log('Error: internal server error');
    return res.status(500).json({ message: 'internal server error' });
  }

  console.log(`Error: ${message}`);
  return res.status(status).json({ message });
});

module.exports = app;
