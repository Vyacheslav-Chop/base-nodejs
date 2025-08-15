import Joi from 'joi';
import { GENDERS } from '../constants/genders.js';

export const createStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'any.required': "It's required",
  }),
  age: Joi.number().integer().min(6).max(16).required().messages({
    'number.min': "To low!",
    'number.max': "To large",
  }),
  gender: Joi.string()
    .valid(...Object.values(GENDERS))
    .required(),
  avgMark: Joi.number().min(2).max(12).required(),
  onDuty: Joi.boolean(),
});

