import {} from 'styled-components';
import { ThemeType } from './theme-type';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
