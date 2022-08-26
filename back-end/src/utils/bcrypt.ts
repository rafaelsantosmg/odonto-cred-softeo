import bcrypt from 'bcryptjs';

const saltRounds = 10;

const generateHash = (password: string): string => {
  return bcrypt.hashSync(password, saltRounds);
};

const compareHash = (password: string, hashPassword: string): boolean => {
  return bcrypt.compareSync(password, hashPassword);
};

export { generateHash, compareHash };
