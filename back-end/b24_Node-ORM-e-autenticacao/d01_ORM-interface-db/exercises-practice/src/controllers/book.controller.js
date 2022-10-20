const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  const { status, result } = await BookService.getAll();
  return res.status(status).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, result } = await BookService.getById(id);
  return res.status(status).json(result);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { status, result } = await BookService.create(title, author, pageQuantity);
  return res.status(status).json(result);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const { status, result } = await BookService.update(id, title, author, pageQuantity);
  return res.status(status).json(result);
}

const remove = async (req, res) => {
  const { id } = req.params;
  const { status, result } = await BookService.remove(id);
  return res.status(status).json(result);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
