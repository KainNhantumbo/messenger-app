import { HeaderContainer as Container } from '../styles/components/header';
import { HiChatAlt2 } from 'react-icons/hi';
import { IoPersonCircle } from 'react-icons/io5';
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
					<span>Messenger</span>
				</h2>
			</section>
			<section>
				<div className='functions'></div>
				<div className='user'>
					<div>
						{user.avatar ? (
							<img src={user.avatar} alt={user.username} />
						) : (
							<IoPersonCircle />
						)}
					</div>
					<div>
						<span>{user.username}</span>
						<span>{user.email}</span>
					</div>
				</div>
			</section>
		</Container>
	);
}
