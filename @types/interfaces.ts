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
  username: string
	date: string;
}

export interface IUser {
	_id: string;
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	avatar: string;
}

export interface ISignInData {
	email: string;
	password: string;
}

export interface ISignUpData {
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	password: string;
	confirm_password: string
}
