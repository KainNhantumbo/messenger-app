import {
  IoAttachOutline,
  IoChatbubblesOutline,
  IoCreateOutline,
  IoPaperPlane,
  IoPersonCircle,
  IoSync,
} from 'react-icons/io5';
import { ChatBoxContainer as Container } from '../styles/components/chat-box';
import { motion } from 'framer-motion';
import { calendarTime } from '../utils/time';
import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/AppContext';
import { NextRouter, useRouter } from 'next/router';
import actions from '../context/actions';
import Loading from './GenericLoading';

export default function ChatBox(): JSX.Element {
  const router: NextRouter = useRouter();
  const scrollRef = useRef();
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { state, dispatch, fetchAPI, socket } = useAppContext();

  async function handleMessage(): Promise<void> {
    const chatId = router.query.chatId;
    if (!chatId || !inputValue) return;
    try {
      await fetchAPI({
        method: 'post',
        url: '/messages',
        data: { chatId, content: inputValue },
      });
      console.log({ chatId: chatId, content: inputValue });
      socket.emit('send-message');
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  }

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>): void {
    const fileList: FileList | null = e.target.files;
    const fileArr: File[] = [];
    Object.values(fileList || {}).forEach((file) => {
      fileArr.push(file);
    });
    console.log(fileArr);
  }

  const loadChat = async (): Promise<void> => {
    try {
      const { data } = await fetchAPI({
        method: 'get',
        url: `/chats/${router.query?.chatId}`,
      });
      dispatch({
        type: actions.CHAT_DATA,
        payload: { ...state, chat: { ...data } },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (scrollRef as any).current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.chat]);

  useEffect(() => {
    router.query.chatId && loadChat();
  }, [router.query]);

  useEffect(() => {
    const loadChatDebounce = setTimeout(() => {
      socket.on('message-received', () => {
        loadChat();
      });
    }, 100);
    return () => {
      socket.off('message-received');
      clearTimeout(loadChatDebounce);
    };
  }, [loadChat]);

  return (
    <Container>
      {router.query?.chatId && (
        <section className='header'>
          <div className='friend-container' id={state.chat.friend._id}>
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
              <p>{state.isConnected ? '• online' : '• offline'}</p>
            </div>
          </div>
        </section>
      )}
      {router.query?.chatId && (
        <section className='messages-container'>
          {state.chat.messages.map((message) => (
            <div
              ref={scrollRef as any}
              id={'message'}
              key={message._id}
              className={`message ${
                message.author == state.userAuth.userId ? 'owner' : 'friend'
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
                {message.author == state.userAuth.userId ? (
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
      )}
      {router.query?.chatId && (
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
      )}

      {!router.query.chatId && (
        <section className='start-message'>
          <div>
            <IoChatbubblesOutline />
            <h3>Connect with friends by starting a conversation.</h3>
          </div>
        </section>
      )}

      {isLoading && <Loading message='Fetching data... Please wait...' />}
    </Container>
  );
}
