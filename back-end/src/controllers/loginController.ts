import { Request, Response } from 'express';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response): Promise<Response> => {
  const login = await loginService.login(req.body);
  return res.status(200).json(login);
};

export default { login };
