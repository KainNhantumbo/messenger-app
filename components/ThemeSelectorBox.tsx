import { motion, AnimatePresence } from 'framer-motion';
import { IThemeData } from '../@types/interfaces';
import { useThemeContext } from '../context/ThemeContext';
import { useState, useEffect, FC } from 'react';
import { useAppContext } from '../context/AppContext';
import { IoCheckmarkCircle, IoClose, IoLayersOutline } from 'react-icons/io5';
import { ThemeSelectorContainer as Container } from '../styles/components/theme-selector-box';

const themeOptions: IThemeData[] = [
  { code: 'light-default', themeName: 'Light (Default)' },
  { code: 'dark-default', themeName: 'Dark (Default)' },
  { code: 'dark-roselyn', themeName: 'Dark Roselyn' },
];

const ThemeSelectorBox: FC = (): JSX.Element => {
  const { themeSwitcher, currentTheme } = useThemeContext();
  const [activeTheme, setActiveTheme] = useState<string>('');
  const { state, themeSelectorBoxController } = useAppContext();

  useEffect((): void => {
    setActiveTheme(() => {
      const { theme } = JSON.parse(
        localStorage.getItem('ThemeSettings') ?? `{"theme":"light-default"}`
      );
      return theme;
    });
  }, [currentTheme]);

  return (
    <AnimatePresence>
      {state.isThemeSelectorBoxActive && (
        <Container
          className='main'
          onClick={(e) => {
            const target = (e as any).target.classList;
            if (target.contains('main')) {
              themeSelectorBoxController();
            }
          }}>
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
            exit={{ opacity: 0, scale: 0 }}>
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
                    }>
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
                onClick={themeSelectorBoxController}>
                <IoClose />
              </button>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default ThemeSelectorBox;
