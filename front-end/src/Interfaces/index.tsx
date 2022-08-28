export interface MainContextProvider {
  children: React.ReactNode;
}

export interface MainContextData {
  user: IRegister;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  username: string;
  repeatPassword?: string;
}
