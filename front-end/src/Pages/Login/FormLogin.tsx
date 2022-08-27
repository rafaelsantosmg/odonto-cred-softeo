import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { ILogin } from '../../Context/interfaces/context.interface';
import loginRequest from '../../Context/utils';

export default function FormLogin() {
  const navigate = useNavigate();

  const [login, setLogin] = useState<ILogin>({
    email: '',
    password: '',
  });

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await loginRequest(login);
      setLogin({ email: '', password: '' });
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="d.flex">
      <MDBInput
        className="mb-4"
        type="email"
        id="formEmail"
        label="Email"
        value={login.email}
        onChange={({ target }) => setLogin({ ...login, email: target.value })}
      />
      <MDBInput
        className="mb-4"
        type="password"
        id="formPassword"
        label="Senha"
        value={login.password}
        onChange={({ target }) =>
          setLogin({ ...login, password: target.value })
        }
      />
      <MDBBtn type="submit" block onClick={onSubmit}>
        Entrar
      </MDBBtn>
    </form>
  );
}
