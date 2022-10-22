import { ThemeProvider } from 'styled-components';
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from 'react';
import { light_default } from '../themes/light-themes';
import { dark_default } from '../themes/dark-themes';
import GlobalStylesheet from '../styles/global';

type ThemeType = { theme: string };
type Props = { children: ReactNode };

interface IContextProps {
  themeSwitcher: (theme: string) => void;
}

const context = createContext<IContextProps>({
  themeSwitcher: (theme: string) => {},
});

export default function ThemeContext(props: Props): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState(light_default);
  const THEME_STORAGE_KEY = 'ThemeSettings';

  const loadTheme = (themeCode?: string): void => {
    const { theme }: ThemeType = JSON.parse(
      localStorage.getItem(THEME_STORAGE_KEY) || `{"theme":"light-default"}`
    );

    switch (themeCode ? themeCode : theme) {
      case 'light-default':
        setCurrentTheme(light_default);
        localStorage.setItem(
          THEME_STORAGE_KEY,
          JSON.stringify({ theme: 'light-default' })
        );
        break;
      case 'dark-default':
        setCurrentTheme(dark_default);
        localStorage.setItem(
          THEME_STORAGE_KEY,
          JSON.stringify({ theme: 'dark-default' })
        );
        break;
      default:
        setCurrentTheme(light_default);
    }
  };

  // swithches the current theme
  const themeSwitcher = (theme: string): void => loadTheme(theme);

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStylesheet />
      <context.Provider
        value={{
          themeSwitcher,
        }}
      >
        {props.children}
      </context.Provider>
    </ThemeProvider>
  );
}

export const useThemeContext = (): IContextProps => useContext(context);
