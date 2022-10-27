import {
  IoAttachOutline,
  IoCreateOutline,
  IoPaperPlane,
  IoPersonCircle,
  IoTimeOutline,
} from 'react-icons/io5';
import { ChatBoxContainer as Container } from '../styles/components/chat-box';
import { calendarTime } from '../utils/time';
import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/AppContext';

export default function ChatBox(): JSX.Element {
  const scrollRef: any = useRef();
  const { state } = useAppContext();
  const [inputValue, setInputValue] = useState<string>('');

  async function handleMessage(): Promise<void> {}

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>): void {
    const fileList: FileList | null = e.target.files;
    const fileArr: File[] = [];
    Object.values(fileList || {}).forEach((file) => {
      fileArr.push(file);
    });
    console.log(fileArr);
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.chatMessages]);

  return (
    <Container>
      <section className='header'>
        <div className='friend-container' id={state.friend._id}>
          <div className='avatar-container'>
            {state.friend.avatar ? (
              <img
                src={state.friend.avatar}
                alt={`${state.friend.user_name} + profile picture`}
              />
            ) : (
              <IoPersonCircle />
            )}
          </div>
          <div className='status-container'>
            <h3>{state.friend.user_name}</h3>
            <p>{state.friend.email}</p>
          </div>
        </div>
      </section>
      <section className='messages-container '>
        {state.chatMessages.map((message) => (
          <div
            ref={scrollRef}
            key={message._id}
            className={`message ${message.owner ? 'owner' : 'friend'}`}
          >
            <div className='time'>
              <IoTimeOutline />
              <span>{calendarTime(message.createdAt)}</span>
            </div>
            <div className='message-content'>
              {message.content.includes('\n') ? (
                message.content
                  .split('\n')
                  .map((phragraph) => <p>{phragraph}</p>)
              ) : (
                <p>{message.content}</p>
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
    </Container>
  );
}
