import express from 'express';
import loginController from '../controllers/loginController';
import { celebrate } from 'celebrate';
import { loginSchema } from '../schemas/celebrateSchemas';

const router = express.Router();

router.use('/', celebrate(loginSchema), loginController.login);

export default router;
