import { motion, AnimatePresence } from 'framer-motion';
import { ThemeSelectorContainer as Container } from '../styles/components/theme-selector-box';
import { IoClose, IoLayersOutline } from 'react-icons/io5';
import { IThemeData } from '../@types/interfaces';
import { useThemeContext } from '../context/ThemeContext';

interface IProps {
  quit: () => void;
  active: boolean;
}

const themeOptions: IThemeData[] = [
  { code: 'light-default', themeName: 'Light (Default)' },
  { code: 'dark-default', themeName: 'Dark (Default)' },
  { code: 'dark-rumble', themeName: 'Dark Rumble' },
  { code: 'dark-drackula', themeName: 'Dark Drackula' },
];

export default function ThemeSelectorBox(props: IProps): JSX.Element {
  const { themeSwitcher } = useThemeContext();
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
              <section className='header-container'>
                <span className='prompt-title'>Themes Selector</span>
                <p className='prompt-message'>Choose color themes</p>
              </section>

              <section className='themes-container'>
                {themeOptions.map((option) => (
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.8 }}
                    key={option.code}
                    onClick={() => {
                      props.quit();
                      themeSwitcher(option.code);
                    }}
                  >
                    <IoLayersOutline />
                    <span>{option.themeName}</span>
                  </motion.div>
                ))}
              </section>

              <button
                title='Close Panel'
                className='box-btn_close'
                onClick={props.quit}
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
