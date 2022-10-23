import { motion, AnimatePresence } from 'framer-motion';
import { IoArrowBackOutline } from 'react-icons/io5';
import { PromptContainer as Container } from '../styles/components/dialog-prompt-box';
import { useAppContext } from '../context/AppContext';

interface IProps {
  prompt_title: string;
  prompt_message: string;
  button_text: string;
  icon: JSX.Element;
}

export default function PromptBox(props: IProps): JSX.Element {
  const { state, logoutUser, logoutBoxController } = useAppContext();
  return (
    <AnimatePresence>
      {state.isPromptActive && (
        <Container
          className='main'
          onClick={(e) => {
            const target = (e as any).target.classList;
            if (target.contains('main')) {
              logoutBoxController();
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
                <span className='prompt-title'>{props.prompt_title}</span>
                <p className='prompt-message'>{props.prompt_message}</p>
              </div>
              <div className='prompt-actions'>
                <button className='prompt-cancel' onClick={logoutBoxController}>
                  <IoArrowBackOutline />
                  <span>Cancel</span>
                </button>
                <button className='prompt-accept' onClick={logoutUser}>
                  {props.icon}
                  <span>{props.button_text}</span>
                </button>
              </div>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}
