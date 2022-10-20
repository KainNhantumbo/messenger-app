import { NextPage } from 'next';
import { IoExit, IoExitOutline } from 'react-icons/io5';
import { useState, useEffect, useReducer } from 'react';
import { io, Socket } from 'socket.io-client';
import { MainContainer as Container } from '../../styles/main';
import { IChat, IMessage, IUser } from '../../@types/interfaces';
import Aside from '../../components/Aside';
import ChatList from '../../components/ChatList';
import ChatBox from '../../components/ChatBox';
import reducer, { initialState } from '../../context/reducer';
import actions from '../../context/actions';
import PromptBox from '../../components/PromptBox';

const Main: NextPage = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const logout = async (): Promise<void> => {
    try {
      dispatch({
        type: actions.PROMPT_BOX_CONTROL,
      });
    } catch (err) {
      console.error(err);
    }
  };
  const logoutBoxController = (): void => {
    dispatch({
      type: actions.PROMPT_BOX_CONTROL,
    });
  };

  return (
    <>
      <Container>
        <Aside dispatch={dispatch}/>
        <PromptBox
          button_text='Log out'
          prompt_message='Do you really want terminate this session and logout?'
          prompt_title='Messenger Logout'
          quit={logoutBoxController}
          icon={<IoExitOutline />}
          active={state.isPromptActive}
          action={logout}
        />
        <ChatList chatList={state.chatsList} />
        <ChatBox messages={state.chatMessages} friend={state.friend} />
      </Container>
    </>
  );
};

export default Main;

// const [socket, setSocket] = useState<Socket>(() =>
// 	io('http://localhost:4800')
// );

// const senMessage = async (): Promise<void> => {
// 	try {
// 		socket.emit('send-message', { message });
// 		console.log(message);
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

// useEffect(() => {
// 	const initSocket: Socket = io('http://localhost:4800');
// 	setSocket(initSocket);
// }, []);

{
  /* <div>
      <section className='message-input'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            value={message}
            placeholder={'Type your message'}
            onChange={(e) => {
              setMessage(e.target.value)
              socket.emit('typing')
            }}
          />
          <button onClick={senMessage}>
            <span>Send</span>
          </button>
        </form>
      </section>
    </div> */
}
