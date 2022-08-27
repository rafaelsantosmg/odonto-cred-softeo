import Cookie from 'js-cookie';
import api from '../Api';
import { ILogin } from './interfaces/context.interface';

const loginRequest = async (data: ILogin) => {
  try {
    const response = await api.post('/login', data);
    Cookie.set('token', response.data.token);
    localStorage.setItem('user', response.data.username);
  } catch (error) {
    console.log(error);
  }
};

export default loginRequest;
