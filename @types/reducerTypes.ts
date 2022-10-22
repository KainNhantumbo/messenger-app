import { IChat, IMessage, IUser } from './interfaces';

export type State = {
  isPromptActive: boolean;
  isAppInfoActive: boolean;
  user: IUser;
  chatsList: IChat[]
  chatMessages: IMessage[]
  friend: IUser
};

export type Action = { type: string; payload?: State };
