import { NextPage } from 'next';
import { MainContainer as Container } from '../../styles/main';
import Aside from '../../components/Aside';
import ChatList from '../../components/ChatList';
import ChatBox from '../../components/ChatBox';
import PromptBox from '../../components/PromptBox';
import AppInfoBox from '../../components/AppInfoBox';
import AccountBox from '../../components/AccountBox';
import ThemeSelectorBox from '../../components/ThemeSelectorBox';

const Main: NextPage = (): JSX.Element => (
  <Container>
    <Aside />
    <ChatList />
    <ChatBox />
    <PromptBox />
    <AppInfoBox />
    <ThemeSelectorBox />
    <AccountBox reload={() => {}} />
  </Container>
);

export default Main;
