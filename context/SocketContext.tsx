import { createContext, useEffect, useContext, ReactNode, FC } from 'react';
import { useSocket } from '../lib/socket';
import { BASE_URL } from '../config/client';
import { useAppContext } from './AppContext';
import { Socket, io } from 'socket.io-client';

interface IProps {
  children: ReactNode;
}

type TContext = {
  socket: Socket;
};

const context = createContext<TContext>({
  socket: io(),
});

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
  return (
    <context.Provider value={{ socket }}>{props.children}</context.Provider>
  );
};

export default SocketContext;
export const useSocketContext = (): TContext => useContext(context);
