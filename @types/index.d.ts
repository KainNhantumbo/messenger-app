import {
  IChat,
  IChatData,
  IFriendSlice,
  IOnlineUsers,
  IUser,
  IUserCredentials,
} from './interfaces';
import { ChangeEvent, FormEvent } from 'react';

export type TInputEvents =
	| ChangeEvent<HTMLInputElement>
	| ChangeEvent<HTMLSelectElement>
	| ChangeEvent<HTMLTextAreaElement>;

export type TSubmitEvent = FormEvent<HTMLFormElement>;

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
};

export type TAction = { type: string; payload: TState };

