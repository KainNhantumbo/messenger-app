import { NextPage } from 'next';
import { IoExitOutline } from 'react-icons/io5';
import { io, Socket } from 'socket.io-client';
import { MainContainer as Container } from '../../styles/main';
import Aside from '../../components/Aside';
import ChatList from '../../components/ChatList';
import ChatBox from '../../components/ChatBox';
import PromptBox from '../../components/PromptBox';
import AppInfoBox from '../../components/AppInfoBox';
import AccountBox from '../../components/AccountBox';
import ThemeSelectorBox from '../../components/ThemeSelectorBox';
import { useAppContext } from '../../context/AppContext';

const Main: NextPage = (): JSX.Element => {
  const { state } = useAppContext();

  return (
    <>
      <Container>
        <Aside />
        <AccountBox reload={() => {}} />
        <ThemeSelectorBox />
        <AppInfoBox />
        <PromptBox
          button_text='Log out'
          prompt_message='Do you really want terminate this session and logout?'
          prompt_title='Messenger Logout'
          icon={<IoExitOutline />}
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
