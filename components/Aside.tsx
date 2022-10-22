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
import type { Dispatch } from 'react';
import type { Action } from '../@types/reducerTypes';
import actions from '../context/actions';

interface IProps {
  dispatch: Dispatch<Action>;
}

export default function Aside({ dispatch }: IProps): JSX.Element {
  const logoutBoxController = (): void => {
    dispatch({
      type: actions.PROMPT_BOX_CONTROL,
    });
  };

  const appInfoBoxController = (): void => {
    dispatch({
      type: actions.APP_INFO_BOX_CONTROL,
    });
  };

  const accountBoxController = (): void => {
    dispatch({
      type: actions.ACCOUNT_BOX_CONTROL,
    });
  };

  const themeSelectorBoxController = (): void => {
    dispatch({
      type: actions.THEME_SELECTOR_BOX_CONTROL,
    });
  };

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
          <button title='Friends'>
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
