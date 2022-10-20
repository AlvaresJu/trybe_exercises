const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return { status: 200, result: books };
};

module.exports = {
  getAll,
};
