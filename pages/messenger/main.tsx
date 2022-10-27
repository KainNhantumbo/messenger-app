import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MainContainer as Container } from '../../styles/main';
import Aside from '../../components/Aside';
import ChatList from '../../components/ChatList';
import ChatBox from '../../components/ChatBox';
import PromptBox from '../../components/PromptBox';
import AppInfoBox from '../../components/AppInfoBox';
import AccountBox from '../../components/AccountBox';
import ThemeSelectorBox from '../../components/ThemeSelectorBox';
import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';

const Main: NextPage = (): JSX.Element => {
  const { userAuth } = useAppContext();
  let router = useRouter();

  useEffect(() => {
    const isUserAuthenticated = setTimeout(() => {
      if (!userAuth.token) {
        router.push('/auth/sign-in');
      }
    }, 100);
    return () => clearTimeout(isUserAuthenticated);
  }, [userAuth]);

  return (
    <>
      {!userAuth.token ? (
        <div className='loading'>Loading... please wait...</div>
      ) : (
        <Container>
          <Aside />
          <ChatList />
          <ChatBox />
          <PromptBox />
          <AppInfoBox />
          <ThemeSelectorBox />
          <AccountBox reload={() => {}} />
        </Container>
      )}
    </>
  );
};

export default Main;
