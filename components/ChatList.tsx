import {
	IoEllipsisHorizontal,
	IoPersonCircle,
	IoSearch,
} from 'react-icons/io5';
import { IChat } from '../@types/interfaces';
import { ChatListContainer as Container } from '../styles/components/chat-list';
import { useState, useEffect } from 'react';
import { formatTime } from '../utils/time';

interface IProps {
	chatList: IChat[];
}
export default function ChatList({ chatList }: IProps): JSX.Element {
	const [searchValue, setSearchValue] = useState<string>('');

	return (
		<Container>
			<section className='top-container'>
				<h2>
					<span>Messages</span>
				</h2>
				<form onSubmit={(e) => e.preventDefault()}>
					<input
						type='search'
						placeholder='Search'
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					<IoSearch />
				</form>
			</section>
			<section className='chats-container'>
				{chatList.map((chat) => (
					<div className='chat' key={chat._id}>
						<div className='avatar-container'>
							{chat.avatar ? (
								<img
									src={chat.avatar}
									alt={`${chat.username} + profile picture`}
								/>
							) : (
								<IoPersonCircle />
							)}
						</div>
						<div className='status-container'>
							<h3>{chat.username}</h3>
							<p>{chat.message}</p>
						</div>
						<span className='date'>{formatTime(chat.date).split(' ')[0]}</span>
					</div>
				))}
			</section>
			<div className='dead-zone'>
				<IoEllipsisHorizontal />
			</div>
		</Container>
	);
}
