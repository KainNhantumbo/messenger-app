import '../css/main.css';
import type { AppProps } from 'next/app';
import ThemeContext from '../context/ThemeContext';
import AppContext from '../context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <ThemeContext>
        <Component {...pageProps} />
      </ThemeContext>
    </AppContext>
  );
}

export default MyApp;
