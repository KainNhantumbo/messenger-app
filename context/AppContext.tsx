import { useState, createContext, ReactNode, useContext } from 'react';

interface Props {
  children: ReactNode;
}

interface ContextProps {
  accountSecurityCode: string;
}

const context = createContext<ContextProps>({
  accountSecurityCode: '',
});

export default function AppContext(props: Props) {
  const [accountSecurityCode, setAccountSecurityCode] = useState<string>('shdofjspdfjk[spdkf[skd[fdfsdfsdfsdf');
  return (
    <context.Provider
      value={{
        accountSecurityCode,
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export const useAppContext = (): ContextProps => {
  return useContext(context);
};
