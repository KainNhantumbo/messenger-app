import { IoPaperPlane, IoPersonCircle, IoTimeOutline } from 'react-icons/io5';
import { SubmitEvent } from '../@types/form';
import { IMessage, IUser } from '../@types/interfaces';
import { ChatBoxContainer as Container } from '../styles/components/chat-box';
import { calendarTime } from '../utils/time';
import { useState } from 'react';

interface IProps {
	messages: IMessage[];
	friend: IUser;
}

export default function ChatBox({ friend, messages }: IProps): JSX.Element {
	const [inputValue, setInputValue] = useState<string>('');

	async function handleMessage(e: SubmitEvent): Promise<void> {}

	const [files, setFiles] = useState<File[]>([]);
	function handleFiles(e: React.ChangeEvent<HTMLInputElement>): void {
		const fileList: FileList | null = e.target.files;
		const fileArr: File[] = [];
		Object.values(fileList || {}).forEach((value) => {
			fileArr.push(value);
		});
		setFiles(fileArr);
		console.log(fileArr);
	}

	return (
		<Container>
			<section className='header'>
				<div className='friend-container' id={friend._id}>
					<div className='avatar-container'>
						{friend.avatar ? (
							<img
								src={friend.avatar}
								alt={`${friend.username} + profile picture`}
							/>
						) : (
							<IoPersonCircle />
						)}
					</div>
					<div className='status-container'>
						<h3>{friend.username}</h3>
						<p>{friend.email}</p>
					</div>
				</div>
			</section>
			<section className='messages-container '>
				{messages.map((message) => (
					<div
						key={message._id}
						className={`message ${message.owner ? 'owner' : 'friend'}`}
					>
						<div className='time'>
							<IoTimeOutline />
							<span>{calendarTime(message.createdAt)}</span>
						</div>
						<div className='message-content'>
							{message.content.includes('\n') ? (
								message.content
									.split('\n')
									.map((phragraph) => <p>{phragraph}</p>)
							) : (
								<p>{message.content}</p>
							)}
						</div>
					</div>
				))}
			</section>
			<section className='input-container'>
				<form onSubmit={(e) => handleMessage(e)}>
					<input
						type='text'
						value={inputValue}
						placeholder={'Type your message'}
						onChange={(e): void => setInputValue(e.target.value)}
					/>
					<input
						type='file'
						name='file'
						id='file'
						multiple
						onChange={(e) => handleFiles(e)}
					/>
					<button type='submit' title='Send message'>
						<IoPaperPlane />
					</button>
				</form>
			</section>
		</Container>
	);
}
