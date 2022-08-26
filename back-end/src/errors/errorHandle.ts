import { Request, Response, NextFunction } from 'express';
import { apiError } from '../errors/apiError';

export default (
  err: apiError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal Error' });
};
