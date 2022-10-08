import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

const Main: NextPage = (): JSX.Element => {
	const [message, setMessage] = useState<string>('');
	// const [socket, setSocket] = useState<Socket>(() =>
	// 	io('http://localhost:4800')
	// );
	const [chatsList, setChatsList] = useState([]);
	const [chatMessages, setChatMessages] = useState([]);

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

	return (
		<div>
			<section className='message-input'>
				<form onSubmit={(e) => e.preventDefault()}>
					{/* <input
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
					</button> */}
				</form>
			</section>
		</div>
	);
};

export default Main;
