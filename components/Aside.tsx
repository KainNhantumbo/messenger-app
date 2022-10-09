import { HeaderContainer as Container } from '../styles/components/header';
import {
	HiChatAlt2,
	HiOutlineCog,
	HiOutlineExclamationCircle,
} from 'react-icons/hi';
import {
	IoChatboxOutline,
	IoLogOutOutline,
	IoPeopleOutline,
	IoPersonCircleOutline,
	IoSunny,
} from 'react-icons/io5';

export default function Aside(): JSX.Element {
	return (
		<Container>
			<section className='logo'>
				<h2>
					<HiChatAlt2 />
				</h2>
			</section>

			<section className='actions-container'>
				<div>
					<button title='Chats'>
						<IoChatboxOutline />
					</button>
					<button title='Friends'>
						<IoPeopleOutline />
					</button>
					<button title='Theme'>
						<IoSunny />
					</button>
					<button title='Settings'>
						<HiOutlineCog />
					</button>
				</div>

				<div>
					<button title='Account'>
						<IoPersonCircleOutline />
					</button>
					<button title='App Information'>
						<HiOutlineExclamationCircle />
					</button>
					<button title='Log Out'>
						<IoLogOutOutline />
					</button>
				</div>
			</section>
		</Container>
	);
}
