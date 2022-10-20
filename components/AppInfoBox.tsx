import { motion, AnimatePresence } from 'framer-motion';
import { AppInfoContainer as Container } from '../styles/components/app-info-box';
import metadata from '../data/app-metadata';
import {
  IoClose,
  IoChatbubbleEllipses,
  IoCodeSlash,
  IoRibbon,
  IoFlower,
} from 'react-icons/io5';

interface IProps {
  quit: () => void;
  active: boolean;
}

export default function AppInfoBox(props: IProps): JSX.Element {
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
            <div className='dialog-box'>
              <div className='box-info'>
                <span className='box-title'>App Information</span>
                <h2 className='box-app-name'>
                <IoChatbubbleEllipses />
                  <span>
                    {metadata.appName} v{metadata.version}
                  </span>
                </h2>
                <h3>
                  <IoCodeSlash />{' '}
                  <span>
                    <i>Developer:</i> {metadata.developer}
                  </span>
                </h3>
                <h3>
                  <IoRibbon/>
                  <span>{metadata.license}</span>
                </h3>
              </div>
              <div className='box-content'>
                <section className='box-content_header'></section>
                <section className='contacts'>
                  {metadata.contacts.map((contact) => (
                    <div className='contact'>
                      <h3>
                        {<contact.icon />}
                        <span>{contact.name}: </span>
                        <a href={`https://${contact.url}`}>{contact.url}</a>
                      </h3>
                    </div>
                  ))}
                </section>
              </div>
              <h3>
                <IoFlower/>
                <span> {metadata.copyright}</span>
              </h3>
              <button className='box-btn' onClick={props.quit}>
                <IoClose />
              </button>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}
