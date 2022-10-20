const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return { status: 200, result: books };
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  if (!book) return { status: 404, result: { message: 'Book not found' } };
  return { status: 200, result: book };
}

module.exports = {
  getAll,
  getById,
};
