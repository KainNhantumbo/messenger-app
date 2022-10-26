import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useReducer,
  Dispatch,
  SetStateAction,
} from 'react';
import reducer, { initialState } from './reducer';
import actions from './actions';
import { Action, State } from '../@types/reducerTypes';
import { io, Socket } from 'socket.io-client';
import { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios';
import fetchClient from '../api/client';
import { NextRouter, useRouter } from 'next/router';
import { IUserCredentials } from '../@types/interfaces';

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
  user: IUserCredentials;
  setUser: Dispatch<SetStateAction<IUserCredentials>>;
  setAccountSecurityCode: Dispatch<SetStateAction<string>>;
  fetchAPI: (config: AxiosRequestConfig) => AxiosPromise<any>;
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
  user: { userId: '', token: '' },
  setUser: () => {},
  setAccountSecurityCode: () => {},
  fetchAPI: (): any => {},
});

export default function AppContext(props: Props) {
  const router: NextRouter = useRouter();
  const [user, setUser] = useState<IUserCredentials>({ userId: '', token: '' });
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

  // makes connection to the server api
  function fetchAPI(config: AxiosRequestConfig): AxiosPromise<any> {
    fetchClient.interceptors.response.use(
      undefined,
      function (err: AxiosError) {
        if (err.response?.status === 401) {
          router.push('/account/sign-in');
        }
        return Promise.reject(err);
      }
    );

    return fetchClient({
      ...config,
      withCredentials: true,
      headers: { authorization: `Bearer ${user.token}` },
    });
  }

  // const [socket, setSocket] = useState<Socket>(() =>
  // 	io('http://localhost:4800')
  // );

  // const senMessage = async (): Promise<void> => {
  // 	try {
  // 		socket.emit('send-message', { message });
  // 		console.log(message);
  // 	} catch (error) {
  // 		console.error(error);
  // 	}
  // };

  // useEffect(() => {
  // 	const initSocket: Socket = io('http://localhost:4800');
  // 	setSocket(initSocket);
  // }, []);

  return (
    <context.Provider
      value={{
        accountSecurityCode,
        setAccountSecurityCode,
        state,
        dispatch,
        logoutBoxController,
        appInfoBoxController,
        accountBoxController,
        themeSelectorBoxController,
        editAccountController,
        logoutUser,
        user,
        setUser,
        fetchAPI,
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export const useAppContext = (): ContextProps => {
  return useContext(context);
};
