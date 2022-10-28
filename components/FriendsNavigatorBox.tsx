import {
  IoAlbumsOutline,
  IoChatbubbleEllipses,
  IoClose,
  IoFileTrayFull,
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

export default function FriendsNavigatorBox(): JSX.Element {
  const [statusMessage, setStatusMessage] = useState<IStatusMessage>({
    message: 'Nothing to show. Thats all we know.',
    icon: IoAlbumsOutline,
  });
  const { state, dispatch, friendsNavigatorController } = useAppContext();
  const [searchValue, setSearchValue] = useState<string>('');
  const handleInitChat = () => {};
  const handleAddFriend = () => {};

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
                    {state.friendsList.length > 1 ? (
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
                              onClick={handleInitChat}
                            >
                              <IoChatbubbleEllipses />
                              <span>Chat</span>
                            </button>
                            <button
                              className='prompt-add'
                              onClick={handleAddFriend}
                            >
                              <IoPersonAddOutline />
                              <span>Add friend</span>
                            </button>
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
