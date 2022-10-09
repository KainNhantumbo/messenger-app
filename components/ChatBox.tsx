import { IoPersonCircle, IoTime, IoTimeOutline } from 'react-icons/io5';
import { IMessage, IUser } from '../@types/interfaces';
import { ChatBoxContainer as Container } from '../styles/components/chat-box';
import { formatRelativeTime, formatTime } from '../utils/time';

interface IProps {
	messages: IMessage[];
	friend: IUser;
}

export default function ChatBox({ friend, messages }: IProps): JSX.Element {
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
							<span>{formatTime(message.createdAt)}</span>
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
		</Container>
	);
}
