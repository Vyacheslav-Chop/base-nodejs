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
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/students.js';
import { isValid } from '../middlewares/isValidId.js';

const router = Router();

export default router;

router.get('/students', ctrlWrapper(getStudentsController));

router.get(
  '/students/:studentId',
  isValid,
  ctrlWrapper(getStudentByIdController),
);

router.post(
  '/students',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

router.delete('/students/:studentId', ctrlWrapper(deleteStudentController));

router.put(
  '/students/:studentId',
  validateBody(updateStudentSchema),
  ctrlWrapper(upsertStudentController),
);

router.patch(
  '/students/:studentId',
  validateBody(updateStudentSchema),
  ctrlWrapper(patchSrudentController),
);
