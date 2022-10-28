import {
  IoChatbubbleEllipses,
  IoClose,
  IoFileTrayFull,
  IoPersonAddOutline,
  IoPersonCircle,
  IoSearch,
} from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import actions from '../context/actions';
import { motion, AnimatePresence } from 'framer-motion';
import { FriendsNavigatorContainer as Container } from '../styles/components/friends-navigator';
import { IStatusMessage } from '../@types/interfaces';

export default function FriendsNavigatorBox(): JSX.Element {
  const [statusMessage, setStatusMessage] = useState<IStatusMessage>({
    message: 'No friends to show',
    icon: IoFileTrayFull,
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
                      placeholder='Search'
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <IoSearch />
                  </form>
                </section>

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
                        <div className='status-container'>
                          <h3>{friend.user_name}</h3>
                          <p>{friend.email}</p>
                        </div>

                        <div className='actions-container'>
                          <div className='prompt-actions'>
                            <button
                              className='prompt-cancel'
                              onClick={handleInitChat}
                            >
                              <IoChatbubbleEllipses />
                              <span>Chat</span>
                            </button>
                            <button
                              className='prompt-accept'
                              onClick={handleAddFriend}
                            >
                              <IoPersonAddOutline />
                              <span>Add friend</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <section className='status-message'>
                      <div className='status-icon'>
                        {<statusMessage.icon />}
                      </div>
                      <p>{statusMessage.message}</p>
                    </section>
                  )}
                </section>
              </div>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}
