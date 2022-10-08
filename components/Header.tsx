import { HeaderContainer as Container } from '../styles/components/header';
import { HiChatAlt2, HiCog, HiSun } from 'react-icons/hi';
import { IoColorPalette, IoPersonCircle, IoSunny } from 'react-icons/io5';
import { FaCog } from 'react-icons/fa';
import { IUser } from '../@types/interfaces';
import Link from 'next/link';

interface IProps {
	user: IUser;
}

export default function Header({ user }: IProps): JSX.Element {
	return (
		<Container>
			<section className='logo'>
				<h2>
					<HiChatAlt2 />
					<span>Messenger</span>
				</h2>
			</section>
			<section className='actions-container'>
				<div className='actions'>
					<button>
						<HiSun />
					</button>
					<button>
						<HiCog />
					</button>
				</div>
				<div className='user-container'>
					<div className='user-image'>
						{user.avatar ? (
							<img src={user.avatar} alt={user.username} />
						) : (
							<IoPersonCircle />
						)}
					</div>
					<div className='user-data'>
						<span className='username'>{user.username}</span>
						<span>{user.email}</span>
					</div>
				</div>
			</section>
		</Container>
	);
}
