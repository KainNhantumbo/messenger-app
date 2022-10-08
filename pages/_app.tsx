import '../css/main.css';
import type { AppProps } from 'next/app';
import ThemeContext from '../context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeContext>
			<Component {...pageProps} />
		</ThemeContext>
	);
}

export default MyApp;
