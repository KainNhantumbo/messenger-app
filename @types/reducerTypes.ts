import {
  IChat,
  IChatData,
  IFriendSlice,
  IUser,
  IUserCredentials,
} from './interfaces';

export type State = {
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
};

export type Action = { type: string; payload?: State };
