import {
  IoAttachOutline,
  IoCreateOutline,
  IoPaperPlane,
  IoPersonCircle,
  IoTimeOutline,
} from 'react-icons/io5';
import { IMessage, IUser } from '../@types/interfaces';
import { ChatBoxContainer as Container } from '../styles/components/chat-box';
import { calendarTime } from '../utils/time';
import { useState, useEffect } from 'react';

interface IProps {
  messages: IMessage[];
  friend: IUser;
}

export default function ChatBox({ friend, messages }: IProps): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');

  async function handleMessage(): Promise<void> {}

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>): void {
    const fileList: FileList | null = e.target.files;
    const fileArr: File[] = [];
    Object.values(fileList || {}).forEach((value) => {
      fileArr.push(value);
    });
    console.log(fileArr);
  }

  useEffect(() => {
    console.log('moved');
  }, []);

  return (
    <Container>
      <section className='header'>
        <div className='friend-container' id={friend._id}>
          <div className='avatar-container'>
            {friend.avatar ? (
              <img
                src={friend.avatar}
                alt={`${friend.username} + profile picture`}
              />
            ) : (
              <IoPersonCircle />
            )}
          </div>
          <div className='status-container'>
            <h3>{friend.username}</h3>
            <p>{friend.email}</p>
          </div>
        </div>
      </section>
      <section className='messages-container '>
        {messages.map((message) => (
          <div
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
