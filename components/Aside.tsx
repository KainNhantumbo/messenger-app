import { HeaderContainer as Container } from '../styles/components/header';
import { HiOutlineCog, HiOutlineExclamationCircle } from 'react-icons/hi';
import {
  IoChatboxOutline,
  IoChatbubbleEllipses,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonCircleOutline,
  IoSunny,
} from 'react-icons/io5';
import { useAppContext } from '../context/AppContext';

export default function Aside(): JSX.Element {
  const {
    logoutBoxController,friendsNavigatorController,
    accountBoxController,
    themeSelectorBoxController,
    appInfoBoxController,
  } = useAppContext();

  return (
    <Container>
      <section className='logo'>
        <h2>
          <IoChatbubbleEllipses />
        </h2>
      </section>

      <section className='actions-container'>
        <div>
          <button title='Chats'>
            <IoChatboxOutline />
          </button>
          <button title='Friends' onClick={friendsNavigatorController}>
            <IoPeopleOutline />
          </button>
          <button title='Theme Selector' onClick={themeSelectorBoxController}>
            <IoSunny />
          </button>
          <button title='Settings'>
            <HiOutlineCog />
          </button>
        </div>

        <div>
          <button title='Account' onClick={accountBoxController}>
            <IoPersonCircleOutline />
          </button>
          <button title='App Information' onClick={appInfoBoxController}>
            <HiOutlineExclamationCircle />
          </button>
          <button title='Log Out' onClick={logoutBoxController}>
            <IoLogOutOutline />
          </button>
        </div>
      </section>
    </Container>
  );
}
