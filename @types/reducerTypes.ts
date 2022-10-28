import { IChat, IMessage, IUser, IUserCredentials } from './interfaces';

export type State = {
  isPromptActive: boolean;
  isAppInfoActive: boolean;
  isAccountBoxActive: boolean;
  isThemeSelectorBoxActive: boolean;
  isAccountEditMode: boolean;
  isAccountDeleteMode: boolean;
  user: IUser;
  userAuth: IUserCredentials;
  chatsList: IChat[];
  chatMessages: IMessage[];
  friend: IUser;
};

export type Action = { type: string; payload?: State };
