import { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import actions from '../context/actions';
import { motion, AnimatePresence } from 'framer-motion';
import { FriendsNavigatorContainer as Container } from '../styles/components/friends-navigator';
import { IoClose } from 'react-icons/io5';

export default function FriendsNavigatorBox(): JSX.Element {
  const { state, dispatch, friendsNavigatorController } = useAppContext();

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
            <div className='dialog-box'>
              <div className='box-info'>
               
              </div>


              <button
                title='Close Panel'
                className='box-btn'
                onClick={friendsNavigatorController}
              >
                <IoClose />
              </button>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}
