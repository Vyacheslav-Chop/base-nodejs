import Joi from 'joi';
import { GENDERS } from '../constants/genders.js';

export const patchStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  age: Joi.number().integer().min(6).max(16),
  gender: Joi.string().valid(...Object.values(GENDERS)),
  avgMark: Joi.number().min(2).max(12),
  onDuty: Joi.boolean(),
});
