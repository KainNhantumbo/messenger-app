import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { MainContainer as Container } from '../../styles/main';
import Aside from '../../components/Aside';
import ChatList from '../../components/ChatList';
import ChatBox from '../../components/ChatBox';
import PromptBox from '../../components/PromptBox';
import AppInfoBox from '../../components/AppInfoBox';
import AccountBox from '../../components/AccountBox';
import ThemeSelectorBox from '../../components/ThemeSelectorBox';
import FriendsNavigatorBox from '../../components/FriendsNavigatorBox';

const Main: NextPage = (): JSX.Element => {
  const { state } = useAppContext();
  const router = useRouter();

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
          <ChatList />
          <ChatBox />
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
