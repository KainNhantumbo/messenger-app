import type { NextPage } from 'next';
import Link from 'next/link';
import { IoChatbubbleEllipses, IoEllipsisHorizontal } from 'react-icons/io5';
import { HomeContainer as Container } from '../styles/home';

const Home: NextPage = () => {
	return (
		<Container>
			<article>
				<h1>
					<IoChatbubbleEllipses />
					<span>Messenger</span>
				</h1>
				<section>
					<p>Get in touch of your friends instantily for free</p>

					<Link href={'/account/sign-in'}>
						<span>Join & Start Messaging</span>
					</Link>
					<IoEllipsisHorizontal />
				</section>
			</article>
		</Container>
	);
};

export default Home;
