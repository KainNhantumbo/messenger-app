import {
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
  IoLogOutOutline,
  IoPersonCircleOutline,
  IoSunny,
} from 'react-icons/io5';
import type { FC } from 'react';
import type { IconType } from 'react-icons';
import { useAppContext } from '../context/AppContext';
import { HiOutlineCog, HiOutlineExclamationCircle } from 'react-icons/hi';
import { HeaderContainer as Container } from '../styles/components/header';

type TAsideActions = { title: string; icon: IconType; fn: () => void };

const Aside: FC = (): JSX.Element => {
  const {
    logoutBoxController,
    friendsNavigatorController,
    accountBoxController,
    themeSelectorBoxController,
    appInfoBoxController,
  } = useAppContext();

  const asideActions: TAsideActions[] = [
    {
      title: 'Friends',
      fn: friendsNavigatorController,
      icon: IoChatbubbleEllipsesOutline,
    },
    { title: 'Theme Selector', icon: IoSunny, fn: themeSelectorBoxController },
    { title: 'Settings', icon: HiOutlineCog, fn: themeSelectorBoxController },
    { title: 'Account', icon: IoPersonCircleOutline, fn: accountBoxController },
    {
      title: 'App Information',
      icon: HiOutlineExclamationCircle,
      fn: appInfoBoxController,
    },
    { title: 'Log Out', icon: IoLogOutOutline, fn: logoutBoxController },
  ];

  return (
    <Container>
      <IoChatbubbleEllipses className='logo' />
      <section className='actions-container'>
        {asideActions.map((action, index) => (
          <button
            key={index.toString()}
            title={action.title}
            onClick={action.fn}>
            <action.icon />
          </button>
        ))}
      </section>
    </Container>
  );
};

export default Aside;
