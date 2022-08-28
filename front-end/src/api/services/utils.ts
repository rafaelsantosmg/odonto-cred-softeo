import Cookie from 'js-cookie';
import api from '..';
import { ILogin, IRegister } from '../../Interfaces';

export const loginRequest = async (data: ILogin) => {
  const response = await api.post('/login', data);
  Cookie.set('token', response.data.token);
  localStorage.setItem('user', response.data.username);
};

export const createUser = async (data: IRegister) => {
  await api.post('/users', data);
};
