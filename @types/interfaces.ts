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
  owner: boolean;
  content: string;
  createdAt: string;
  avatar: string;
}

export interface IChat {
  _id: string;
  message: string;
  avatar: string;
  username: string;
  date: string;
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
  avatar: string | null;
  password: string;
  confirm_password: string;
}

export interface IUserCredentials {
  userId: string
  token: string
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
