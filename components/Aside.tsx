import { HeaderContainer as Container } from '../styles/components/header';
import { HiOutlineCog, HiOutlineExclamationCircle } from 'react-icons/hi';
import {
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
  IoLogOutOutline,
  IoPersonCircleOutline,
  IoSunny,
} from 'react-icons/io5';
import { useAppContext } from '../context/AppContext';

export default function Aside(): JSX.Element {
  const {
    logoutBoxController,
    friendsNavigatorController,
    accountBoxController,
    themeSelectorBoxController,
    appInfoBoxController,
  } = useAppContext();

  return (
    <Container>
      <IoChatbubbleEllipses className='logo' />
      <section className='actions-container'>
        <button title='Friends' onClick={friendsNavigatorController}>
          <IoChatbubbleEllipsesOutline />
        </button>
        <button title='Theme Selector' onClick={themeSelectorBoxController}>
          <IoSunny />
        </button>
        <button title='Settings'>
          <HiOutlineCog />
        </button>
        <button title='Account' onClick={accountBoxController}>
          <IoPersonCircleOutline />
        </button>
        <button title='App Information' onClick={appInfoBoxController}>
          <HiOutlineExclamationCircle />
        </button>
        <button title='Log Out' onClick={logoutBoxController}>
          <IoLogOutOutline />
        </button>
      </section>
    </Container>
  );
}
