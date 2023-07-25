import { createContext, useEffect, useContext, ReactNode, FC } from 'react';
import { useSocket } from '../lib/socket';
import { BASE_URL } from '../config/client';
import { useAppContext } from './AppContext';

interface IProps {
  children: ReactNode;
}

type Context = {};

const context = createContext<Context>({});

const SocketContext: FC<IProps> = (props): JSX.Element => {
  const { state, dispatch } = useAppContext();
  const socket = useSocket({
    uri: BASE_URL,
    opts: {
      reconnectionAttempts: 5,
      reconnectionDelay: 5000,
      autoConnect: false,
    },
  });

  function startListeners(): void {
    socket.io.on('reconnect', (attempt) => {
      console.info('Reconnection attempt: ', attempt);
    });

    socket.io.on('error', (error) => {
      console.info('Socket reconnection error: ', error);
    });

    socket.io.on('reconnect_failed', () => {
      console.info('Socket connection failed');
    });
  }

  useEffect(() => {
    socket.connect();

    // listenners
    startListeners();
  }, []);
  return <context.Provider value={{}}>{props.children}</context.Provider>;
};

export default SocketContext;
export const useSocketContext = (): Context => useContext(context);
