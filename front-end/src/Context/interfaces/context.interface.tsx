export interface MainContextProvider {
  children: React.ReactNode;
}

export interface MainContextData {
  user: IUser;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser extends ILogin {
  username: string;
}
