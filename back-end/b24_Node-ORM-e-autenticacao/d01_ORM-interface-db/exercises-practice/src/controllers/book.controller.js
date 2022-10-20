const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  const { status, result } = await BookService.getAll();
  return res.status(status).json(result);
};

module.exports = {
  getAll,
};
