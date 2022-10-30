import {
  IoAlbumsOutline,
  IoChatbubbleEllipses,
  IoClose,
  IoPersonAddOutline,
  IoPersonCircle,
  IoSearch,
} from 'react-icons/io5';
import { FriendsNavigatorContainer as Container } from '../styles/components/friends-navigator';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { IStatusMessage } from '../@types/interfaces';
import actions from '../context/actions';
import { NextRouter, useRouter } from 'next/router';

export default function FriendsNavigatorBox(): JSX.Element {
  const router: NextRouter = useRouter();
  const [statusMessage, setStatusMessage] = useState<IStatusMessage>({
    message: 'Nothing to show. Thats all we know.',
    icon: IoAlbumsOutline,
  });
  const { state, dispatch, fetchAPI, friendsNavigatorController } =
    useAppContext();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleInitChat = async (friendId: string): Promise<void> => {
    try {
      const { data } = await fetchAPI({
        method: 'post',
        url: '/chats',
        data: { sender: state.userAuth.userId, receiver: friendId },
      });
      friendsNavigatorController();
      data._id &&
        router.push(
          `/messenger/main?${
            router.query.user && `user=${router.query?.user}&`
          }chatId=${data._id}`
        );
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddFriend = async (friendId: string): Promise<void> => {
    try {
      // const { data } = await fetchAPI({
      //   method: 'patch',
      //   url: '/users',
      //   data: { friend: friendId },
      // });
    } catch (error) {
      console.error(error);
    }
  };

  const getFriendsList = async (searchQuery?: string): Promise<void> => {
    try {
      const { data } = await fetchAPI({
        method: 'get',
        url: `/users/all?fields=user_name,first_name,last_name,avatar,email${
          searchQuery ? `&search=${searchQuery}` : ''
        }`,
      });
      dispatch({
        type: actions.FRIENDS_LIST,
        payload: { ...state, friendsList: data?.users },
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    state.isFriendsNavigatorActive && getFriendsList();
  }, [state.isFriendsNavigatorActive]);

  useEffect(() => {
    const debouceSearch = setTimeout(() => {
      getFriendsList(searchValue);
    }, 200);
    return () => clearTimeout(debouceSearch);
  }, [searchValue]);

  return (
    <AnimatePresence>
      {state.isFriendsNavigatorActive && (
        <Container
          className='main'
          onClick={(e) => {
            const target = (e as any).target.classList;
            if (target.contains('main')) {
              friendsNavigatorController();
            }
          }}
        >
          <motion.section
            className='dialog-modal'
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className='dialog-prompt'>
              <div className='prompt-info'>
                <button
                  title='Close Panel'
                  className='box-btn_close'
                  onClick={friendsNavigatorController}
                >
                  <IoClose />
                </button>

                <span className='prompt-title'>Friends Navigator</span>
                <p className='prompt-message'>
                  Find and view your friends connections
                </p>

                <section className='content-container'>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type='search'
                      placeholder='Search friends...'
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <IoSearch />
                  </form>

                  <section className='friends-container'>
                    {state.friendsList.length > 0 ? (
                      state.friendsList.map((friend) => (
                        <div className='friend' key={friend._id}>
                          <div className='avatar-container'>
                            {friend.avatar ? (
                              <img
                                src={friend.avatar}
                                alt={`${friend.user_name} profile picture`}
                              />
                            ) : (
                              <IoPersonCircle />
                            )}
                          </div>
                          <div className='details-container'>
                            <h3>{friend.user_name}</h3>
                            <p>{friend.email}</p>
                          </div>

                          <div className='actions-container'>
                            <button
                              className='prompt-chat'
                              onClick={(): Promise<void> =>
                                handleInitChat(friend._id)
                              }
                            >
                              <IoChatbubbleEllipses />
                              <span>Chat</span>
                            </button>
                            {/* <button
                              className='prompt-add'
                              onClick={(): Promise<void> =>
                                handleAddFriend(friend._id)
                              }
                            >
                              <IoPersonAddOutline />
                              <span>Add friend</span>
                            </button> */}
                          </div>
                        </div>
                      ))
                    ) : (
                      <section className='status-message'>
                        {<statusMessage.icon />}
                        <span>{statusMessage.message}</span>
                      </section>
                    )}
                  </section>
                </section>
              </div>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}
