export interface IMessage {
	_id: string;
	author: string;
	owner: boolean;
	content: string;
	createdAt: string;
	avatar: string;
}

export interface IChat {
	message: string;
	avatar: string;
	createdAt: string;
}

export interface IUser {
	_id: string;
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	createdAt: string;
	updatedAt: string;
  avatar: string
}

export interface ISignInData {}

export interface ISignUpData {}
