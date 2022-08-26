import { readFileSync } from 'fs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = readFileSync('./.private.key');

export const createToken = (user: object | boolean) => {
  return jwt.sign({ user }, SECRET_KEY, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
};

export const decoderToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};
