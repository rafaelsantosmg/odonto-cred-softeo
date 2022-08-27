import { createContext, useState, useMemo } from 'react';
import {
  MainContextProvider,
  MainContextData,
} from './interfaces/context.interface';

export const MainContext = createContext({} as MainContextData);

function ContextProvider({ children }: MainContextProvider) {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      setLogin,
    }),
    [login, user],
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export default ContextProvider;
