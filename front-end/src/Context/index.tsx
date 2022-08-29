import { createContext, ReactNode, useState } from 'react';

interface AppContextInterface {
  token: string | undefined;
  setToken: (token: string | undefined) => void;
}

export const AppCtx = createContext({} as AppContextInterface);

export default function MainContext({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | undefined>('');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppCtx.Provider value={{ token, setToken }}>{children}</AppCtx.Provider>
  );
}
