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

const create = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return { status: 201, result: newBook };
}

const update = async (id, title, author, pageQuantity) => {
  const [updatedBook] = await Book.update({ title, author, pageQuantity }, { where: { id } });
  if (!updatedBook) return { status: 404, result: { message: 'Book not found' } };
  return { status: 200, result: { message: 'Book updated!' } };
}

module.exports = {
  getAll,
  getById,
  create,
  update,
};
