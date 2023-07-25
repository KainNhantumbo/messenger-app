import {
  IChat,
  IChatData,
  IFriendSlice,
  IOnlineUsers,
  IUser,
  IUserCredentials,
} from './interfaces';
import {} from 'styled-components';
import { ChangeEvent, FormEvent } from 'react';

export type TInputEvents =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>
  | ChangeEvent<HTMLTextAreaElement>;

export type TSubmitEvent = FormEvent<HTMLFormElement>;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

export type ThemeType = {
  primary: string;
  secondary: string;
  accent: string;
  font: string;
  neutral: string;
  background: string;
  background_variant: string;
  foreground: string;
  foreground_variant: string;
  alternative_a: string;
  alternative_b: string;
};

export type TState = {
  isPromptActive: boolean;
  isAppInfoActive: boolean;
  isFriendsNavigatorActive: boolean;
  isAccountBoxActive: boolean;
  isThemeSelectorBoxActive: boolean;
  isAccountEditMode: boolean;
  isAccountDeleteMode: boolean;
  isConnected: boolean;
  user: IUser;
  chat: IChatData;
  userAuth: IUserCredentials;
  friendsList: IFriendSlice[];
  chatsList: IChat[];
  onlineUsers: IOnlineUsers[];
  accountSecurityCode: string;
};

export type TAction = { type: string; payload: TState };
