import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import Aside from '../../components/Aside';
import ChatList from '../../components/ChatList';
import ChatBox from '../../components/ChatBox';
import PromptBox from '../../components/PromptBox';
import AppInfoBox from '../../components/AppInfoBox';
import AccountBox from '../../components/AccountBox';
import ThemeSelectorBox from '../../components/ThemeSelectorBox';
import FriendsNavigatorBox from '../../components/FriendsNavigatorBox';
import { MainContainer as Container } from '../../styles/common/main';

const Main: NextPage = (): JSX.Element => {
  const { state } = useAppContext();
  const router: NextRouter = useRouter();

  useEffect((): (() => void) => {
    const debounceTimer = setTimeout(() => {
      if (!state.auth.token) {
        router.push('/auth/sign-in');
      }
    }, 300);
    return (): void => clearTimeout(debounceTimer);
  }, [state.auth]);

  return (
    <>
      {!state.auth.token ? (
        <div className='loading'>
          <span>Loading... please wait...</span>
        </div>
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
