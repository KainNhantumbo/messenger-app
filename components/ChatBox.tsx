import {
  IoAttachOutline,
  IoChatbubblesOutline,
  IoCreateOutline,
  IoPaperPlane,
  IoPersonCircle,
} from 'react-icons/io5';
import Loading from './GenericLoading';
import { actions } from '../data/actions';
import { calendarTime } from '../lib/utils';
import { NextRouter, useRouter } from 'next/router';
import { useAppContext } from '../context/AppContext';
import { useSocketContext } from '../context/SocketContext';
import { useState, useEffect, useRef, ChangeEvent, FC } from 'react';
import { ChatBoxContainer as Container } from '../styles/components/chat-box';

const ChatBox: FC = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const scrollRef = useRef();
  const [isUserOnline, setIsUserOnline] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { state, dispatch, fetchAPI } = useAppContext();
  const { socket } = useSocketContext();

  async function handleMessage(): Promise<void> {
    const chatId = router.query.chatId;
    if (!chatId || !inputValue) return;
    try {
      await fetchAPI({
        method: 'post',
        url: '/messages',
        data: { chatId, content: inputValue },
      });
      socket.emit('send-message', chatId);
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  }

  const handleFiles = (e: ChangeEvent<HTMLInputElement>): void => {
    const files: FileList | null = e.target.files;
    const fileArr: File[] = Object.values(files || {}).map((file) => file);
    console.info(fileArr);
  };

  const getCurrentChat = async (isRefetch?: boolean): Promise<void> => {
    try {
      !isRefetch && setIsLoading(true);
      const { data } = await fetchAPI<any>({
        method: 'get',
        url: `/api/v1/chats/${router.query?.chatId ?? ''}`,
      });

      dispatch({
        type: actions.CHAT_DATA,
        payload: { ...state, chat: { ...data } },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (scrollRef as any).current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.chat]);

  useEffect((): void => {
    router.query.chatId && getCurrentChat();
  }, [router.query]);

  useEffect((): (() => void) => {
    socket.on('message-received', (chatId) => {
      if (chatId === router.query?.chatId) {
        setTimeout(() => {
          getCurrentChat(true);
        }, 100);
      }
    });
    return (): void => {
      socket.off('message-received');
    };
  }, [handleMessage]);

  useEffect((): void => {
    if (
      state.onlineUsers.some((user) => user.userId === state.chat.friend._id)
    ) {
      setIsUserOnline(true);
    } else {
      setIsUserOnline(false);
    }
  }, [state.onlineUsers]);

  useEffect((): (() => void) => {
    socket.on('message-received', (chatId) => {
      if (chatId === router.query?.chatId) {
        setTimeout(() => {
          getCurrentChat(true);
        }, 100);
      }
    });
    return (): void => {
      socket.off('message-received');
    };
  }, [state.chat, socket]);

  return (
    <Container>
      {router.query?.chatId ? (
        <>
          <section className='header'>
            <div
              className={`friend-container ${isUserOnline && 'online-dot'} ${
                isUserOnline ? 'online' : 'offline'
              }`}
              id={state.chat.friend._id}>
              <div className='avatar-container'>
                {state.chat.friend.avatar ? (
                  <img
                    src={state.chat.friend.avatar}
                    alt={`${state.chat.friend.user_name} + profile picture`}
                  />
                ) : (
                  <IoPersonCircle />
                )}
              </div>
              <div className='status-container'>
                <h3>{state.chat.friend.user_name}</h3>
                <p>{isUserOnline ? 'online' : 'offline'}</p>
              </div>
            </div>
          </section>
          <section className='messages-container'>
            {state.chat.messages.map((message) => (
              <div
                ref={scrollRef as any}
                id={'message'}
                key={message._id}
                className={`message ${
                  message.author == state.auth.userId ? 'owner' : 'friend'
                }`}>
                {message.content && (
                  <div className='message-content'>
                    {message.content?.includes('\n') ? (
                      message.content
                        .split('\n')
                        .map((phragraph) => <p>{phragraph}</p>)
                    ) : (
                      <p>{message.content}</p>
                    )}
                  </div>
                )}
                <div className='time'>
                  {message.author == state.auth.userId ? (
                    <span>You • {calendarTime(message.createdAt)}</span>
                  ) : (
                    <span>
                      {state.chat.friend.user_name} •{' '}
                      {calendarTime(message.createdAt)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </section>
          <section className='input-container'>
            <div className='message-input'>
              <textarea
                value={inputValue}
                placeholder={'Type your message'}
                onChange={(e): void => setInputValue(e.target.value)}
              />
              <IoCreateOutline />
            </div>
            <button title='Send message' onClick={handleMessage}>
              <IoPaperPlane />
            </button>
            <div title='Send files' className='upload-files'>
              <label htmlFor='file'>
                <IoAttachOutline />
              </label>
              <input
                type='file'
                name='file'
                id='file'
                multiple
                onChange={(e): void => handleFiles(e)}
              />
            </div>
          </section>
        </>
      ) : null}

      {!router.query.chatId && !isLoading ? (
        <section className='start-message'>
          <div>
            <IoChatbubblesOutline />
            <h3>Connect with friends by starting a conversation.</h3>
          </div>
        </section>
      ) : null}

      {isLoading ? <Loading message='Fetching data... Please wait...' /> : null}
    </Container>
  );
};

export default ChatBox;
