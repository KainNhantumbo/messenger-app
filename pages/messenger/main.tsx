import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MainContainer as Container } from '../../styles/main';
import Aside from '../../components/Aside';
import ChatList from '../../components/ChatList';
import ChatBox from '../../components/ChatBox';
import PromptBox from '../../components/PromptBox';
import AppInfoBox from '../../components/AppInfoBox';
import AccountBox from '../../components/AccountBox';
import FriendsNavigatorBox from '../../components/FriendsNavigatorBox';
import ThemeSelectorBox from '../../components/ThemeSelectorBox';
import { useAppContext } from '../../context/AppContext';
import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { baseURL } from '../../api/client';

const Main: NextPage = (): JSX.Element => {
  const { state } = useAppContext();
  const router = useRouter();
  const socketRef = useRef<Socket>(io(baseURL));
  const [socket, setSocket] = useState(socketRef.current);

  useEffect(() => {
    socketRef.current = io(baseURL);
    setSocket(socketRef.current);
    socket;
  }, [state.userAuth]);

  socket.on('online-users', (data) => {
    console.log(data);
  });

  useEffect(() => {
    const isUserAuthenticated = setTimeout(() => {
      if (!state.userAuth.token) {
        router.push('/auth/sign-in');
      }
    }, 100);
    return () => clearTimeout(isUserAuthenticated);
  }, [state.userAuth]);

  return (
    <>
      {!state.userAuth.token ? (
        <div className='loading'>Loading... please wait...</div>
      ) : (
        <Container>
          <Aside />
          <ChatList socket={socket} />
          <ChatBox socket={socket} />
          <PromptBox />
          <AppInfoBox />
          <ThemeSelectorBox />
          <FriendsNavigatorBox />
          <AccountBox />
        </Container>
      )}
    </>
  );
};

export default Main;
