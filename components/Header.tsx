import { HeaderContainer as Container } from '../styles/components/header';
import {
	HiChatAlt2,
	HiCog,
	HiOutlineExclamationCircle,
	HiSun,
} from 'react-icons/hi';
import {
	IoChatbox,
	IoLogOutOutline,
	IoPeople,
	IoPersonCircle,
} from 'react-icons/io5';
import { IUser } from '../@types/interfaces';

interface IProps {
	user: IUser;
}

export default function Header({ user }: IProps): JSX.Element {
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
						<IoChatbox />
					</button>
					<button title='Friends'>
						<IoPeople />
					</button>
					<button title='Theme'>
						<HiSun />
					</button>
					<button title='Settings'>
						<HiCog />
					</button>
				</div>

				<div>
					<button title='Account'>
						<IoPersonCircle />
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
