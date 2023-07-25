import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  Dispatch,
  useEffect,
} from 'react';
import {
  AxiosError,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { actions } from '../data/actions';
import fetch from '../config/client';
import SocketContext from './SocketContext';
import { TAction, TAuth, TState } from '../@types';
import { NextRouter, useRouter } from 'next/router';
import reducer, { initialState } from '../lib/reducer';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'always',
    },
  },
});

interface Props {
  children: ReactNode;
}

interface ContextProps {
  state: TState;
  dispatch: Dispatch<TAction>;
  logoutUser: () => Promise<void>;
  logoutBoxController: () => void;
  appInfoBoxController: () => void;
  accountBoxController: () => void;
  editAccountController: () => void;
  deleteAccountController: () => void;
  friendsNavigatorController: () => void;
  themeSelectorBoxController: () => void;
  fetchAPI: <T>(config: AxiosRequestConfig) => Promise<AxiosResponse<T, any>>;
}

const context = createContext<ContextProps>({
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
  fetchAPI: (): any => {},
});

export default function AppContext(props: Props): JSX.Element {
  const router: NextRouter = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  // ============= modal controllers =================== //
  const logoutBoxController = (): void => {
    dispatch({
      type: actions.PROMPT_BOX_CONTROL,
      payload: { ...state, isPromptActive: !state.isPromptActive },
    });
  };

  const friendsNavigatorController = (): void => {
    dispatch({
      type: actions.FRIENDS_NAVIGATOR_BOX_CONTROL,
      payload: {
        ...state,
        isFriendsNavigatorActive: !state.isFriendsNavigatorActive,
      },
    });
  };

  const appInfoBoxController = (): void => {
    dispatch({
      type: actions.APP_INFO_BOX_CONTROL,
      payload: { ...state, isFriendsNavigatorActive: !state.isAppInfoActive },
    });
  };

  const accountBoxController = (): void => {
    dispatch({
      type: actions.ACCOUNT_BOX_CONTROL,
      payload: { ...state, isAccountBoxActive: !state.isAccountBoxActive },
    });
  };

  const themeSelectorBoxController = (): void => {
    dispatch({
      type: actions.THEME_SELECTOR_BOX_CONTROL,
      payload: {
        ...state,
        isThemeSelectorBoxActive: !state.isThemeSelectorBoxActive,
      },
    });
  };

  const editAccountController = (): void => {
    dispatch({
      type: actions.ACCOUNT_EDIT_MODE,
      payload: { ...state, isAccountEditMode: !state.isAccountEditMode },
    });
  };

  const deleteAccountController = (): void => {
    dispatch({
      type: actions.ACCOUNT_DELETE_MODE,
      payload: { ...state, isAccountDeleteMode: !state.isAccountDeleteMode },
    });
  };

  // a client that makes connection to the server api
  async function validateAuth(): Promise<void> {
    try {
      const { data } = await fetch<TAuth>({
        method: 'get',
        url: '/api/v1/auth/refresh',
        withCredentials: true,
      });
      dispatch({
        type: actions.AUTH,
        payload: { ...state, auth: { ...data } },
      });
    } catch (err: any) {
      console.error(err);
    }
  }

  async function fetchAPI<T>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T, any>> {
    fetch.interceptors.response.use(
      undefined,
      (err: AxiosError): Promise<never> => {
        const status = Number(err.response?.status);
        if (status > 400 && status < 404) {
          validateAuth().catch((err) => {
            console.error(err);
            router.push('/auth/sign-in');
          });
        }
        return Promise.reject(err);
      }
    );
    return await fetch<T>({
      ...config,
      headers: { authorization: `Bearer ${state.auth.token}` },
    });
  }

  const logoutUser = async (): Promise<void> => {
    try {
      await fetchAPI({
        method: 'post',
        url: '/auth/logout',
        withCredentials: true,
      });
      dispatch({
        type: actions.AUTH,
        payload: { ...state, auth: { userId: '', token: '' } },
      });
      dispatch({
        type: actions.PROMPT_BOX_CONTROL,
        payload: { ...state, isPromptActive: !state.isPromptActive },
      });
      router.push('/auth/sign-in');
    } catch (err: any) {
      console.error(err);
    }
  };

  const authenticateUser = async (): Promise<void> => {
    try {
      const { data } = await fetch<TAuth>({
        method: 'get',
        url: '/api/v1/auth/refresh',
        withCredentials: true,
      });
      dispatch({
        type: actions.AUTH,
        payload: { ...state, auth: { ...data } },
      });
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect((): void => {
    authenticateUser();
  }, []);

  useEffect((): (() => void) => {
    const timer = setTimeout((): void => {
      validateAuth();
    }, 1000 * 60 * 4);
    return (): void => clearTimeout(timer);
  }, [state.auth]);

  return (
    <QueryClientProvider client={queryClient}>
      <context.Provider
        value={{
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
        }}>
        <SocketContext>{props.children}</SocketContext>
      </context.Provider>
    </QueryClientProvider>
  );
}

export const useAppContext = (): ContextProps => useContext(context);
