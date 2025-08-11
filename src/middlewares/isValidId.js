import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValid = (req, res, next) => {
  const { studentId } = req.params;
  if (!isValidObjectId(studentId)) {
    throw createHttpError(400, 'Bed request');
  }

  next();
};
