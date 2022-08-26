import { Request, Response } from 'express';
import userService from '../services/userService';

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const message = await userService.createUser(req.body);
  return res.status(201).json({ message });
};

export default {
  createUser,
};
