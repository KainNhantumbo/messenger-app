import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useReducer,
  Dispatch,
} from 'react';
import reducer, { initialState } from './reducer';
import actions from './actions';
import { Action, State } from '../@types/reducerTypes';

interface Props {
  children: ReactNode;
}

interface ContextProps {
  accountSecurityCode: string;
  state: State;
  dispatch: Dispatch<Action>;
  logoutUser: () => Promise<void>;
  logoutBoxController: () => void;
  appInfoBoxController: () => void;
  accountBoxController: () => void;
  editAccountController: () => void;
  themeSelectorBoxController: () => void;
}

const context = createContext<ContextProps>({
  accountSecurityCode: '',
  state: initialState,
  dispatch: () => {},
  logoutBoxController: () => {},
  appInfoBoxController: () => {},
  accountBoxController: () => {},
  editAccountController: () => {},
  themeSelectorBoxController: () => {},
  logoutUser: async () => {},
});

export default function AppContext(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [accountSecurityCode, setAccountSecurityCode] = useState<string>('');

  const logoutBoxController = (): void => {
    dispatch({
      type: actions.PROMPT_BOX_CONTROL,
    });
  };

  const appInfoBoxController = (): void => {
    dispatch({
      type: actions.APP_INFO_BOX_CONTROL,
    });
  };

  const accountBoxController = (): void => {
    dispatch({
      type: actions.ACCOUNT_BOX_CONTROL,
    });
  };

  const themeSelectorBoxController = (): void => {
    dispatch({
      type: actions.THEME_SELECTOR_BOX_CONTROL,
    });
  };

	const editAccountController = (): void => {
    dispatch({
      type: actions.ACCOUNT_EDIT_MODE,
    });
  };

	const logoutUser = async (): Promise<void> => {
    try {
      dispatch({
        type: actions.PROMPT_BOX_CONTROL,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <context.Provider
      value={{
        accountSecurityCode,
        state,
        dispatch,
        logoutBoxController,
        appInfoBoxController,
        accountBoxController,
        themeSelectorBoxController,
				editAccountController,
        logoutUser,
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export const useAppContext = (): ContextProps => {
  return useContext(context);
};
