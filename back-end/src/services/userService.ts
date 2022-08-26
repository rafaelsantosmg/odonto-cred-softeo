import User from '../database/models/user';
import { IUser } from '../interfaces/user.interface';
import apiError from '../errors/apiError';
import { generateHash } from '../utils/bcrypt';

const createUser = async ({
  username,
  email,
  password,
}: IUser): Promise<string> => {
  const user = await User.findOne({ where: { email } });
  if (user) throw apiError(409, 'Conflict');
  const hashPassword = generateHash(password);
  await User.create({ username, email, password: hashPassword });
  return 'Success';
};

const findUser = () => {};

export default { createUser, findUser };
