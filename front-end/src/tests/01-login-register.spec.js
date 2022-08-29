import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen, act } from '@testing-library/react';
import renderWithRouter from './Components/RenderWithRouter';
import App from '../App';

describe('Teste do componente Login / Register', () => {
  beforeEach(async () => {
    renderWithRouter(<App />);
  });

  describe('Testa o formulário de Login', () => {
    it('Verifica se o existe o botao Login', async () => {
      const btnLogin = screen.getByTestId('select-form-login');
      expect(btnLogin).toBeInTheDocument();
    });

    it('Verifica se o existe o input email', async () => {
      const inputEmail = screen.getByTestId('field_login_input_email');
      expect(inputEmail).toBeInTheDocument();
    });

    it('Verifica se o existe o input password', async () => {
      const inputPassword = screen.getByTestId('field_login_input_password');
      expect(inputPassword).toBeInTheDocument();
    });

    it('Verifica se o existe o button Entrar', async () => {
      const btnSubmit = screen.getByRole('button', { name: 'Entrar' });
      expect(btnSubmit).toBeInTheDocument();
    });

    it(`Verifica se, caso email e password estejam com dados corretos o 
        botão fica HABILITADO para login`, async () => {
      const inputEmail = screen.getByTestId('field_login_input_email');
      const inputPassword = screen.getByTestId('field_login_input_password');
      const btnSubmit = screen.getByRole('button', { name: 'Entrar' });
      const emailValid = 'erika@odontolab.com.br';
      const passwordValid = '123456';

      userEvent.type(inputEmail, emailValid);
      userEvent.type(inputPassword, passwordValid);

      expect(btnSubmit).toBeEnabled();
    });
  });

  describe('Testa o formulário de Register', () => {
    it('Verifica se o existe o botao Register', async () => {
      const btnRegister = screen.getByTestId('select-form-register');
      expect(btnRegister).toBeInTheDocument();
    });

    it('Verifica se o existe o input email', async () => {
      const inputEmail = screen.getByTestId('field_register_input_username');
      expect(inputEmail).toBeInTheDocument();
    });

    it('Verifica se o existe o input email', async () => {
      const inputEmail = screen.getByTestId('field_register_input_email');
      expect(inputEmail).toBeInTheDocument();
    });

    it('Verifica se o existe o input password', async () => {
      const inputPassword = screen.getByTestId('field_register_input_password');
      expect(inputPassword).toBeInTheDocument();
    });

    it('Verifica se o existe o input password', async () => {
      const inputPassword = screen.getByTestId(
        'field_register_input_repeat_password',
      );
      expect(inputPassword).toBeInTheDocument();
    });

    it('Verifica se o existe o button Finalizar', async () => {
      const btnSubmit = screen.getByRole('button', { name: 'Finalizar' });
      expect(btnSubmit).toBeInTheDocument();
    });

    it(`Verifica se, caso email e password estejam com dados corretos o 
        botão fica HABILITADO para cadastrar`, async () => {
      const inputUserName = screen.getByTestId('field_register_input_username');
      const inputEmail = screen.getByTestId('field_register_input_email');
      const inputPassword = screen.getByTestId('field_register_input_password');
      const inputRepeatPassword = screen.getByTestId(
        'field_register_input_repeat_password',
      );
      const btnSubmit = screen.getByRole('button', { name: 'Finalizar' });
      const userNameValid = 'Erika';
      const emailValid = 'erika@odontolab.com.br';
      const passwordValid = '123456';
      const passwordRepeatValid = passwordValid;

      userEvent.type(inputUserName, userNameValid);
      userEvent.type(inputEmail, emailValid);
      userEvent.type(inputPassword, passwordValid);
      userEvent.type(inputRepeatPassword, passwordRepeatValid);

      expect(btnSubmit).toBeEnabled();
    });
  });
});

// describe.only('Testa Navegação do botão', () => {
//   it('Verifica se o existe o button Entrar', async () => {
//     const { history } = renderWithRouter(<App />);

//     const inputEmail = screen.getByTestId('field_login_input_email');
//     const inputPassword = screen.getByTestId('field_login_input_password');
//     const btnSubmit = screen.getByRole('button', { name: 'Entrar' })
//     const emailValid = 'erika@odontolab.com.br';
//     const passwordValid = '123456';

//     userEvent.type(inputEmail, emailValid);
//     userEvent.type(inputPassword, passwordValid);
//     userEvent.click(btnSubmit)
//     expect(btnSubmit).toHaveBeenCalledTimes(1);
//   });
// })
