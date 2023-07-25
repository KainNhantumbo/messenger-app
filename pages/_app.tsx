import '../css/main.css';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import AppContext from '../context/AppContext';
import ThemeContext from '../context/ThemeContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <AppContext>
    <ThemeContext>
      <Component {...pageProps} />
    </ThemeContext>
  </AppContext>
);

export default MyApp;
