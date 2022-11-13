// const Joi = require('joi');

// const joiName = Joi.object({
//   name: Joi.string().min(5).required(),
// }).required().messages({
//   'any.required': '{#label} is required',
//   'string.min': '{#label} length must be at least 5 characters long',
// });

// Coloquei essa nova validação porque com o Joi quebrava o requisito 3, não sei o porque

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = validateName;