import { ToastContainer } from 'react-toastify';
import {
  MDBInput,
  MDBBtn,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import { AxiosError } from 'axios';
import { validationLogin, validationRegister } from '../../utils/formikSchema';
import { loginRequest, createUser } from '../../api/services/utils';
import { ILogin, IRegister } from '../../Interfaces';
import { toastSuccess, toastWarning } from '../../utils/toast';

export default function FormLoginRegister() {
  const navigate = useNavigate();

  const [loginRegisterActive, setLoginRegisterActive] = useState('login');

  const handleLoginRegisterClick = async (option: string) => {
    setLoginRegisterActive(option);
  };

  const handleSubmitLogin = async (data: ILogin) => {
    try {
      await loginRequest(data);
      navigate('/home');
    } catch (error) {
      const err = (error as AxiosError).response?.status;
      if (err && err === 404) {
        toastWarning('Usuário inválido!');
      }
    }
  };

  const handleSubmitRegister = async (data: IRegister) => {
    try {
      const { username, email, password } = data;
      await createUser({ username, email, password });
      toastSuccess('Usuário cadastrado com sucesso!');
      handleLoginRegisterClick('login');
    } catch (error) {
      const err = (error as AxiosError).response?.status;
      if (err && err === 409) {
        toastWarning('Usuário já existe!');
      }
    }
  };

  const login = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationLogin,
    onSubmit: (eventTarget: ILogin, { resetForm }) => {
      handleSubmitLogin(eventTarget);
      resetForm({
        values: login.initialValues,
      });
    },
  });

  const register = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: validationRegister,
    onSubmit: (eventTarget: IRegister, { resetForm }) => {
      handleSubmitRegister(eventTarget);
      resetForm({
        values: register.initialValues,
      });
    },
  });

  return (
    <div>
      <ToastContainer />
      <MDBTabs pills justify className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleLoginRegisterClick('login')}
            active={loginRegisterActive === 'login'}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleLoginRegisterClick('register')}
            active={loginRegisterActive === 'register'}
          >
            Cadastrar
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={loginRegisterActive === 'login'}>
          <form onSubmit={login.handleSubmit}>
            <MDBInput
              className="mb-4"
              type="email"
              id="formEmailLogin"
              label="Endereço de Email"
              name="email"
              value={login.values.email}
              onChange={login.handleChange}
              onBlur={login.handleBlur}
            />
            {login.touched.email && (
              <p className="mb-4 fs-6 text-danger">{login.errors.email}</p>
            )}
            <MDBInput
              className="mb-4"
              type="password"
              id="formPasswordLogin"
              label="Insira a Senha"
              name="password"
              value={login.values.password}
              onChange={login.handleChange}
              onBlur={login.handleBlur}
            />
            {login.touched.password && (
              <p className="mb-4 fs-6 text-danger">{login.errors.password}</p>
            )}
            <MDBBtn type="submit" className="mb-4" block>
              Entrar
            </MDBBtn>
          </form>
        </MDBTabsPane>
        <MDBTabsPane show={loginRegisterActive === 'register'}>
          <form onSubmit={register.handleSubmit}>
            <MDBInput
              className="mb-4"
              id="formNameRegister"
              label="Nome"
              name="username"
              value={register.values.username}
              onChange={register.handleChange}
              onBlur={register.handleBlur}
            />
            {register.touched.username && (
              <p className="mb-4 fs-6 text-danger">
                {register.errors.username}
              </p>
            )}
            <MDBInput
              className="mb-4"
              type="email"
              id="formEmailRegister"
              label="Endereço de Email"
              name="email"
              value={register.values.email}
              onChange={register.handleChange}
              onBlur={register.handleBlur}
            />
            {register.touched.email && (
              <p className="mb-4 fs-6 text-danger">{register.errors.email}</p>
            )}
            <MDBInput
              className="mb-4"
              type="password"
              id="formPasswordRegister"
              label="Insira a Senha"
              name="password"
              value={register.values.password}
              onChange={register.handleChange}
              onBlur={register.handleBlur}
            />
            {register.touched.password && (
              <p className="mb-4 fs-6 text-danger">
                {register.errors.password}
              </p>
            )}
            <MDBInput
              className="mb-4"
              type="password"
              id="formRepeatPasswordRegister"
              label="Confirme a Senha"
              name="repeatPassword"
              value={register.values.repeatPassword}
              onChange={register.handleChange}
              onBlur={register.handleBlur}
            />
            {register.touched.repeatPassword && (
              <p className="mb-4 fs-6 text-danger">
                {register.errors.repeatPassword}
              </p>
            )}
            <MDBBtn type="submit" className="mb-4" block>
              Finalizar
            </MDBBtn>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}
