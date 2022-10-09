import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { MainContainer as Container } from '../../styles/main';
import { IChat, IMessage, IUser } from '../../@types/interfaces';
import Aside from '../../components/Aside';
import ChatList from '../../components/ChatList';
import ChatBox from '../../components/ChatBox';

const Main: NextPage = (): JSX.Element => {
	const [user, setUser] = useState<IUser>({
		_id: 'rdfgdfg',
		first_name: '',
		last_name: '',
		username: 'Marks Bells',
		email: 'developer@mail.co.nz',
		createdAt: '2022-10-08T16:32:46.240Z',
		updatedAt: '2022-10-07T16:32:46.240Z',
		avatar: '',
	});

	const [message, setMessage] = useState<IMessage[]>([]);
	const [chatsList, setChatsList] = useState<IChat[]>([
		{
			_id: 'asdgas64d',
			message: 'Hello, can we have a meeting later?',
			avatar: '',
			date: '2022-10-08T06:52:46.240Z',
			username: 'Dennis',
		},
		{
			_id: 'asd235gas6d',
			message: 'Can we catch up later on the Nests cafe park at 9pm ?',
			avatar: '',
			date: '2022-10-08T17:22:46.240Z',
			username: 'Mellie Markslovn',
		},
		{
			_id: 'as346dg34asd',
			message: 'This is just awesome.',
			avatar: '',
			date: '2022-10-08T10:32:46.240Z',
			username: 'Dave Parkov',
		},
		{
			_id: 'as346dga12sd',
			message: 'This is just awesome.',
			avatar: '',
			date: '2022-10-08T10:32:46.240Z',
			username: 'Dave Parkov',
		},
		{
			_id: 'as346d5235gasd',
			message: 'This is just awesome.',
			avatar: '',
			date: '2022-10-08T10:32:46.240Z',
			username: 'Dave Parkov',
		},
		{
			_id: 'as346dgawerbsd',
			message: 'This is just awesome.',
			avatar: '',
			date: '2022-10-08T10:32:46.240Z',
			username: 'Dave Parkov',
		},
		{
			_id: 'as346dwerwgasd',
			message: 'This is just awesome.',
			avatar: '',
			date: '2022-10-08T10:32:46.240Z',
			username: 'Dave Parkov',
		},
		{
			_id: 'as34erwe6dgasd',
			message: 'This is just awesome.',
			avatar: '',
			date: '2022-10-08T10:32:46.240Z',
			username: 'Dave Parkov',
		},
		{
			_id: 'as346dgbdasd',
			message: 'This is just awesome.',
			avatar: '',
			date: '2022-10-08T10:32:46.240Z',
			username: 'Dave Parkov',
		},
		{
			_id: 'as346dga345sd',
			message: 'This is just awesome.',
			avatar: '',
			date: '2022-10-08T10:32:46.240Z',
			username: 'Dave Parkov',
		},
		{
			_id: 'as34612342341dgasd',
			message: 'This is just awesome.',
			avatar: '',
			date: '2022-10-08T10:32:46.240Z',
			username: 'Dave Parkov675675675675675675675',
		},
		{
			_id: 'as346dg234253asd',
			message: 'This is just awesome.',
			avatar: '',
			date: '2022-10-08T10:32:46.240Z',
			username: 'Dave Parkov',
		},
	]);

	const [chatMessages, setChatMessages] = useState<IMessage[]>([]);

	return (
		<>
			<Container>
				<Aside />
				<ChatList chatList={chatsList} />
				<ChatBox messages={chatMessages}/>
			</Container>
		</>
	);
};

export default Main;

// const [socket, setSocket] = useState<Socket>(() =>
// 	io('http://localhost:4800')
// );

// const senMessage = async (): Promise<void> => {
// 	try {
// 		socket.emit('send-message', { message });
// 		console.log(message);
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

// useEffect(() => {
// 	const initSocket: Socket = io('http://localhost:4800');
// 	setSocket(initSocket);
// }, []);

{
	/* <div>
			<section className='message-input'>
				<form onSubmit={(e) => e.preventDefault()}>
					<input
						type='text'
						value={message}
						placeholder={'Type your message'}
						onChange={(e) => {
              setMessage(e.target.value)
              socket.emit('typing')
            }}
					/>
					<button onClick={senMessage}>
						<span>Send</span>
					</button>
				</form>
			</section>
		</div> */
}
