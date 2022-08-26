import express from 'express';
import userController from '../controllers/userController';
import { celebrate } from 'celebrate';
import { createUserSchema } from '../schemas/celebrateSchemas';

const router = express.Router();

router.use('/', celebrate(createUserSchema), userController.createUser);

export default router;
