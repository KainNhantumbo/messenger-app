import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useReducer,
  Dispatch,
  SetStateAction,
  useEffect,
  useCallback,
} from 'react';
import reducer, { initialState } from './reducer';
import actions from '../data/actions';
import { Action, State } from '../@types/reducerTypes';
import { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios';
import fetchClient from '../config/client';
import { NextRouter, useRouter } from 'next/router';
import { io, Socket } from 'socket.io-client';
import { socket } from '../service/socket';
import { IOnlineUsers } from '../@types/interfaces';

interface Props {
  children: ReactNode;
}

interface ContextProps {
  accountSecurityCode: string;
  state: State;
  socket: Socket;
  dispatch: Dispatch<Action>;
  logoutUser: () => Promise<void>;
  logoutBoxController: () => void;
  appInfoBoxController: () => void;
  accountBoxController: () => void;
  editAccountController: () => void;
  deleteAccountController: () => void;
  friendsNavigatorController: () => void;
  themeSelectorBoxController: () => void;
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
  deleteAccountController: () => {},
  friendsNavigatorController: () => {},
  themeSelectorBoxController: () => {},
  logoutUser: async () => {},
  setAccountSecurityCode: () => {},
  fetchAPI: (): any => {},
  socket: io(),
});

export default function AppContext(props: Props): JSX.Element {
  const router: NextRouter = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [accountSecurityCode, setAccountSecurityCode] = useState<string>('');

  // ============= socket client ====================== //

  useEffect(() => {
    if (state.userAuth.userId) {
      socket.emit('online', state.userAuth.userId);
    }
    socket.on(
      'online-users',
      useCallback((onlineUsers: IOnlineUsers[]) => {
        console.log(onlineUsers);
        if (onlineUsers.some((user) => user.userId === state.userAuth.userId)) {
          dispatch({
            type: actions.IS_CONNECTED,
            payload: { ...state, isConnected: true },
          });
        }
      }, [])
    );
    return () => {
      socket.off('online-users');
    };
  }, [state.userAuth]);

  useEffect(() => {
    socket.on(
      'disconnect',
      useCallback(() => {
        dispatch({
          type: actions.IS_CONNECTED,
          payload: { ...state, isConnected: false },
        });
      }, [])
    );

    return () => {
      socket.off('disconnect');
    };
  }, []);

  // ============= modal controllers =================== //
  const logoutBoxController = (): void => {
    dispatch({
      type: actions.PROMPT_BOX_CONTROL,
    });
  };

  const friendsNavigatorController = (): void => {
    dispatch({
      type: actions.FRIENDS_NAVIGATOR_BOX_CONTROL,
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

  const deleteAccountController = (): void => {
    dispatch({
      type: actions.ACCOUNT_DELETE_MODE,
    });
  };

  // makes connection to the server api
  const fetchAPI = (config: AxiosRequestConfig): AxiosPromise<any> => {
    fetchClient.interceptors.response.use(
      undefined,
      (err: AxiosError): Promise<never> => {
        if (err.response?.status === 401) {
          router.push('/auth/sign-in');
        }
        return Promise.reject(err);
      }
    );

    return fetchClient({
      ...config,
      headers: { authorization: `Bearer ${state.userAuth.token}` },
    });
  };

  const logoutUser = async (): Promise<void> => {
    try {
      await fetchAPI({
        method: 'post',
        url: '/auth/logout',
        withCredentials: true,
      });
      dispatch({
        type: actions.USER_AUTH,
        payload: { ...state, userAuth: { userId: '', token: '' } },
      });
      dispatch({
        type: actions.PROMPT_BOX_CONTROL,
      });
      router.push('/auth/sign-in');
    } catch (err: any) {
      console.error(err);
    }
  };

  async function authenticateUser(): Promise<void> {
    try {
      const { data } = await fetchClient({
        method: 'get',
        url: '/auth/refresh',
        withCredentials: true,
      });
      dispatch({
        type: actions.USER_AUTH,
        payload: {
          ...state,
          userAuth: { token: data?.token, userId: data?.userId },
        },
      });
      router.push(`/messenger/main?user=${data?.userId}`);
    } catch (err: any) {
      if (err.response?.status === 401) {
        router.push('/auth/sign-in');
      }
      console.error(err);
    }
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  useEffect(() => {
    const revalidateUserAuth = setTimeout(() => {
      (async (): Promise<void> => {
        try {
          const { data } = await fetchClient({
            method: 'get',
            url: '/auth/refresh',
            withCredentials: true,
          });
          dispatch({
            type: actions.USER_AUTH,
            payload: {
              ...state,
              userAuth: { token: data?.token, userId: data?.userId },
            },
          });
        } catch (err: any) {
          if (err.response?.status === 401) {
            router.push('/auth/sign-in');
          }
          console.error(err);
        }
      })();
    }, 1000 * 60 * 9);
    return () => clearTimeout(revalidateUserAuth);
  }, [state.userAuth]);

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
        deleteAccountController,
        friendsNavigatorController,
        logoutUser,
        fetchAPI,
        socket,
      }}>
      {props.children}
    </context.Provider>
  );
}

export const useAppContext = (): ContextProps => useContext(context);
