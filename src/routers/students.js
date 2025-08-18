import { Router } from 'express';

import {
  createStudentController,
  deleteStudentController,
  getStudentByIdController,
  getStudentsController,
  patchSrudentController,
  upsertStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createStudentSchema } from '../validation/createStudentSchema.js';
import { patchStudentSchema } from '../validation/patchStudentSchema.js';
import { isValidId } from '../middlewares/isValidId.js';


const studentsRouter = Router();

export default studentsRouter;


studentsRouter.use('/:studentId', isValidId);

studentsRouter.get('/', ctrlWrapper(getStudentsController));

studentsRouter.get('/:studentId', ctrlWrapper(getStudentByIdController));

studentsRouter.post(
  '/',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

studentsRouter.delete('/:studentId', ctrlWrapper(deleteStudentController));

studentsRouter.put(
  '/:studentId',
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);

studentsRouter.patch(
  '/:studentId',
  validateBody(patchStudentSchema),
  ctrlWrapper(patchSrudentController),
);
