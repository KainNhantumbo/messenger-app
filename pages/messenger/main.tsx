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
			message:
				'Can we catch up later on the Nests cafe park at 9pm ?\nCan we catch up later on the Nests cafe park at\nCan we catch up later on the Nests cafe park at',
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

	const [chatMessages, setChatMessages] = useState<IMessage[]>([
		{
			_id: 'styud',
			author: 'Masker',
			owner: false,
			content: 'Hello 83, can we have a meeting later?',
			createdAt: '2022-09-08T16:32:46.240Z',
			avatar: '',
		},
		{
			_id: 'styudd',
			author: 'Masker',
			owner: false,
			content:
				'O resultado da operação puxou as propriedades do meu array e listou elas para mim separando com um traço como eu determinei acima.😊😍',
			createdAt: '2022-10-06T16:32:46.240Z',
			avatar: '',
		},
		{
			_id: 'stygudd',
			author: 'Masker',
			owner: true,
			content:
				'Acima estamos pedindo para que nosso array seja selecionado do elemento 1 até o elemento 3 para gerarmos um novo array somente com os elementos que queremos, veja nosso resultado no console.😊😒🤷‍♂️',
			createdAt: '2022-10-08T16:32:46.240Z',
			avatar: '',
		},
		{
			_id: 'sde3',
			author: 'Bell',
			owner: true,
			content: 'Can we catch up later on the Nests cafe park at 9pm ?',
			createdAt: '2022-10-08T16:32:46.240Z',
			avatar: '',
		},
		{
			_id: 'sdety3',
			author: 'Bell',
			owner: true,
			content: 'Can we catch up later on the Nests cafe park at 9pm ?',
			createdAt: '2022-10-08T16:32:46.240Z',
			avatar: '',
		},
		{
			_id: 'sdeyjty3',
			author: 'Bell',
			owner: true,
			content: 'Can we catch up later on the Nests cafe park at 9pm ?',
			createdAt: '2022-10-08T16:32:46.240Z',
			avatar: '',
		},
		{
			_id: 'sdfe903',
			author: 'Bell',
			owner: false,
			content: 'Can we catch up later on the Nests cafe park at 9pm ?',
			createdAt: '2022-10-08T16:32:46.240Z',
			avatar: '',
		},
	]);
	const [friend, setFriend] = useState<IUser>({
		_id: 'rdfgdfg',
		first_name: '',
		last_name: '',
		username: 'Marks Bells',
		email: 'developer@mail.co.nz',
		createdAt: '2022-10-08T16:32:46.240Z',
		updatedAt: '2022-10-07T16:32:46.240Z',
		avatar: '',
	});

	return (
		<>
			<Container>
				<Aside />
				<ChatList chatList={chatsList} />
				<ChatBox messages={chatMessages} friend={friend} />
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
