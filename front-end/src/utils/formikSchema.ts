import * as Yup from 'yup';

const MESSAGE_ERROR_USERNAME = 'O nome deve conter ao menos 3 caracteres';
const MESSAGE_ERROR_EMAIL = 'Digite um endereço de e-mail válido';
const MESSAGE_ERROR_PASSWORD = 'A senha deve conter ao menos 6 caracteres';
const MESSAGE_ERROR_FIELD = 'Este campo é obrigatório';
const MESSAGE_ERROR_CONFIRM_PASSWORD = 'A senha não confere';

export const validationRegister = Yup.object().shape({
  username: Yup.string()
    .min(3, MESSAGE_ERROR_USERNAME)
    .required(MESSAGE_ERROR_FIELD),
  email: Yup.string().email(MESSAGE_ERROR_EMAIL).required(MESSAGE_ERROR_FIELD),
  password: Yup.string()
    .min(6, MESSAGE_ERROR_PASSWORD)
    .required(MESSAGE_ERROR_FIELD),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    MESSAGE_ERROR_CONFIRM_PASSWORD,
  ),
});

export const validationLogin = Yup.object().shape({
  email: Yup.string().email(MESSAGE_ERROR_EMAIL).required(MESSAGE_ERROR_FIELD),
  password: Yup.string()
    .min(6, MESSAGE_ERROR_PASSWORD)
    .required(MESSAGE_ERROR_FIELD),
});
