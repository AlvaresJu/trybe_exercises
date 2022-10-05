const Joi = require('joi');

const activitySchema = Joi.object({
  name: Joi.string().required().min(4),
  price: Joi.number().required().min(0).precision(2),
  description: Joi.object({
    rating: Joi.number().required().integer().min(1)
      .max(5)
      .messages({
        'any.required': 'O campo "rating" é obrigatório',
        'number.max': 'O campo "rating" deve ser um número inteiro entre 1 e 5',
        'number.min': 'O campo "rating" deve ser um número inteiro entre 1 e 5',
        'number.integer': 'O campo "rating" deve ser um número inteiro entre 1 e 5',
      }),
    difficulty: Joi.alternatives(['Fácil', 'Médio', 'Difícil']).required()
      .messages({ 'any.required': 'O campo "difficulty" é obrigatório' }),
    createdAt: Joi.string().required()
      .pattern(/^(([0-2][1-9])|(3[01]))\/((0[1-9])|(1[0-2]))\/\d{4}$/)
      .messages({ 'any.required': 'O campo "createdAt" é obrigatório' }),
  }).required(),
}).messages({
  'any.required': 'O campo {{#label}} é obrigatório',
  'string.empty': 'O campo {{#label}} é obrigatório',
  'string.min': 'O campo {{#label}} deve ter pelo menos {{#limit}} caracteres',
  'number.min': 'O campo {{#label}} deve ser um número maior ou igual a {{#limit}}',
  'string.pattern.base': 'O campo {{#label}} deve ter o formato "dd/mm/aaaa"',
  'alternatives.types': 'O campo {{#label}} deve ser "Fácil", "Médio" ou "Difícil"',
});

const validateActivity = (req, _res, next) => {
  const activityData = { ...req.body };
  const { error } = activitySchema.validate(activityData, { convert: false });
  if (error) {
    const err = { statusCode: 400, message: error.message };
    next(err);
  } else {
    next();
  }
};

module.exports = validateActivity;
