import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { MainContainer as Container } from '../../styles/main';
import { IChat, IMessage, IUser } from '../../@types/interfaces';
import Aside from '../../components/Aside';
import ChatList from '../../components/ChatList';

const Main: NextPage = (): JSX.Element => {
	const [user, setUser] = useState<IUser>({
		_id: '',
		first_name: '',
		last_name: '',
		username: 'Marks Bells',
		email: 'developer@mail.co.nz',
		createdAt: '2022-10-08T16:32:46.240Z',
		updatedAt: '2022-10-07T16:32:46.240Z',
		avatar: '',
	});

	const [message, setMessage] = useState<IMessage[]>([]);
	const [chatsList, setChatsList] = useState<IChat[]>([]);
	const [chatMessages, setChatMessages] = useState([]);

	return (
		<>
			<Container>
				<Aside />
				<ChatList />
			
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
