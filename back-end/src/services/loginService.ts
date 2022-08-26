import User from '../database/models/user';
import { IUser } from '../interfaces/user.interface';
import apiError from '../errors/apiError';
import { compareHash } from '../utils/bcrypt';
import { createToken } from '../utils/token';
import { IToken } from '../interfaces/token.interface';

const login = async ({ email, password }: IUser): Promise<IToken> => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw apiError(404, 'Not Found');
  const validPassword = compareHash(password, user.password);
  if (!validPassword) throw apiError(403, 'Forbidden');
  const token = createToken(user);
  const { username } = user;
  return { username, token };
};

export default { login };
