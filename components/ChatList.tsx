import {
  IoEllipsisHorizontal,
  IoPersonCircle,
  IoSearch,
} from 'react-icons/io5';
import { ChatListContainer as Container } from '../styles/components/chat-list';
import { useState, useEffect } from 'react';
import { formatTime } from '../utils/time';
import { useAppContext } from '../context/AppContext';
import { NextRouter, useRouter } from 'next/router';
import actions from '../context/actions';

export default function ChatList(): JSX.Element {
  const router: NextRouter = useRouter();
  const { state, dispatch, fetchAPI } = useAppContext();
  const [searchValue, setSearchValue] = useState<string>('');

  const getChatsList = async (): Promise<void> => {
    try {
      const { data } = await fetchAPI({ method: 'get', url: '/chats' });
      dispatch({
        type: actions.CHAT_LIST_DATA,
        payload: { ...state, chatsList: data },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChatsList();
  }, []);

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
        {state.chatsList.length > 0 &&
          state.chatsList.map((chat) => (
            <div className='chat' key={chat._id} onClick={()=>router.push(
              `/messenger/main?${
                router.query.user && `user=${router.query.user}&`
              }chatId=${chat._id}`
            )}>
              <div className='avatar-container'>
                {chat.avatar ? (
                  <img
                    src={chat.avatar}
                    alt={`${chat.user_name} + profile picture`}
                  />
                ) : (
                  <IoPersonCircle />
                )}
              </div>
              <div className='status-container'>
                <h3>{chat.user_name}</h3>
                {chat.message?.content && <p>{chat.message.content}</p>}
              </div>
              <span className='date'>
                {formatTime(chat.message?.createdAt).split(' ')[0]}
              </span>
            </div>
          ))}
      </section>
      {state.chatsList.length > 0 && (
        <div className='dead-zone'>
          <IoEllipsisHorizontal />
        </div>
      )}
    </Container>
  );
}
