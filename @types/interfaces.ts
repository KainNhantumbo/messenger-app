import { IconType } from 'react-icons';

export interface IAppData {
  developer: string;
  version: string;
  appName: string;
  copyright: string;
  license: string;
  contacts: { name: string; url: string; icon: IconType }[];
}

export interface IMessage {
  _id: string;
  author: string;
  chatId: string;
  content?: string;
  file?: string;
  createdAt: string;
}

export interface IStatusMessage {
  icon: IconType;
  message: string;
}

export interface IChat {
  _id: string;
  message: IMessage;
  avatar: string;
  user_name: string;
  createdAt: string;
}

export interface IChatData {
  _id: string;
  author: string;
  friend: {
    _id: string;
    user_name: string;
    email: string;
    avatar: string;
  };
  messages: IMessage[];
  createdAt: string;
}

export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  user_name: string;
  bio: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  avatar: string;
}

export interface IFriendSlice {
  _id: string;
  user_name: string;
  email: string;
  avatar: string;
}

export interface IAccountData {
  first_name: string;
  last_name: string;
  user_name: string;
  avatar: string;
  bio: string;
  password?: string;
  confirm_password?: string;
}

export interface IUserCredentials {
  userId: string;
  token: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpData {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface IRecoverData {
  password: string;
  confirm_password: string;
  email: string;
  recouvery_key: string;
}

export interface IThemeData {
  themeName: string;
  code: string;
}
