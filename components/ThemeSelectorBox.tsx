import { motion, AnimatePresence } from 'framer-motion';
import { ThemeSelectorContainer as Container } from '../styles/components/theme-selector-box';
import {
  IoCheckmarkCircle,
  IoCheckmarkOutline,
  IoClose,
  IoLayersOutline,
} from 'react-icons/io5';
import { IThemeData } from '../@types/interfaces';
import { useThemeContext } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

interface IProps {
  quit: () => void;
  active: boolean;
}

const themeOptions: IThemeData[] = [
  { code: 'light-default', themeName: 'Light (Default)' },
  { code: 'dark-default', themeName: 'Dark (Default)' },
  { code: 'dark-roselyn', themeName: 'Dark Roselyn' },
];

export default function ThemeSelectorBox(props: IProps): JSX.Element {
  const [activeTheme, setActiveTheme] = useState<string>('');
  const { themeSwitcher, currentTheme } = useThemeContext();

  useEffect(() => {
    setActiveTheme(() => {
      const { theme } = JSON.parse(
        localStorage.getItem('ThemeSettings') || `{"theme":"light-default"}`
      );
      return theme;
    });
  }, [currentTheme]);

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
                <span className='prompt-title'>Theme Selector</span>
                <p className='prompt-message'>
                  Choose your preferable color theme
                </p>
              </section>

              <section className='themes-container'>
                {themeOptions.map((option) => (
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.8 }}
                    key={option.code}
                    onClick={() => themeSwitcher(option.code)}
                    className={
                      activeTheme == option.code ? 'active' : 'inactive'
                    }
                  >
                    <IoLayersOutline />
                    <div>
                      <span>{option.themeName}</span>
                      <IoCheckmarkCircle className='checkmark-icon' />
                    </div>
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
