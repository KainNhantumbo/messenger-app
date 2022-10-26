import {
  IoEllipsisHorizontal,
  IoPersonCircle,
  IoSearch,
} from 'react-icons/io5';
import { ChatListContainer as Container } from '../styles/components/chat-list';
import { useState } from 'react';
import { formatTime } from '../utils/time';
import { useAppContext } from '../context/AppContext';

export default function ChatList(): JSX.Element {
  const { state } = useAppContext();
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <Container>
      <section className='top-container'>
        <h2>
          <span>Chats</span>
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='search'
            placeholder='Search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <IoSearch />
        </form>
      </section>
      <section className='chats-container'>
        {state.chatsList.map((chat) => (
          <div className='chat' key={chat._id}>
            <div className='avatar-container'>
              {chat.avatar ? (
                <img
                  src={chat.avatar}
                  alt={`${chat.username} + profile picture`}
                />
              ) : (
                <IoPersonCircle />
              )}
            </div>
            <div className='status-container'>
              <h3>{chat.username}</h3>
              <p>{chat.message}</p>
            </div>
            <span className='date'>{formatTime(chat.date).split(' ')[0]}</span>
          </div>
        ))}
      </section>
      <div className='dead-zone'>
        <IoEllipsisHorizontal />
      </div>
    </Container>
  );
}
