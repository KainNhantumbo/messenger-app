import { motion, AnimatePresence } from 'framer-motion';
import { IoArrowBackOutline } from 'react-icons/io5';
import { PromptContainer as Container } from '../styles/components/dialog-prompt-box';

interface IProps {
  prompt_title: string;
  prompt_message: string;
  button_text: string;
  icon: JSX.Element;
  quit: () => void;
  action: () => Promise<void> | void;
  active: boolean;
}

export default function PromptBox(props: IProps): JSX.Element {
  return (
    <AnimatePresence>
      {props.active && (
        <Container
          className='main'
          onClick={(e) => {
            const target = (e as any).target.classList;
            if (target.contains('main')) {
              props.quit();
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
                <button className='prompt-cancel' onClick={props.quit}>
                  <IoArrowBackOutline />
                  <span>Cancel</span>
                </button>
                <button className='prompt-accept' onClick={props.action}>
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
