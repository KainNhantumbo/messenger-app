import { useState, createContext, ReactNode, useContext } from 'react';

interface Props {
	children: ReactNode;
}

interface ContextProps {}

const context = createContext<ContextProps>({});

export default function AppContext(props: Props) {
	return <context.Provider value={{}}>{props.children}</context.Provider>;
}

export const useAppContext = (): ContextProps => {
	return useContext(context);
};
