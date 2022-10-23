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
import { useAppContext } from '../context/AppContext';

export default function AppInfoBox(): JSX.Element {
  const { state, appInfoBoxController } = useAppContext();
  return (
    <AnimatePresence>
      {state.isAppInfoActive && (
        <Container
          className='main'
          onClick={(e) => {
            const target = (e as any).target.classList;
            if (target.contains('main')) {
              appInfoBoxController();
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
                  <IoCodeSlash />
                  <span>
                    <i>Developer:</i> {metadata.developer}
                  </span>
                </h3>
              </div>

              <section className='contacts'>
                {metadata.contacts.map((contact) => (
                  <div key={contact.name} className='contact'>
                    {<contact.icon />}
                    <span>{contact.name}: </span>
                    <a
                      href={contact.url}
                      target={'_blank'}
                      rel={'noreferrer noopener'}
                    >
                      {contact.url}
                    </a>
                  </div>
                ))}
              </section>

              <div className='legal'>
                <h3>
                  <IoRibbon />
                  <span>{metadata.license}</span>
                </h3>

                <h3>
                  <IoFlower />
                  <span>
                    &copy; {metadata.copyright} / {metadata.appName}
                  </span>
                </h3>
              </div>
              <button
                title='Close Panel'
                className='box-btn'
                onClick={appInfoBoxController}
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
