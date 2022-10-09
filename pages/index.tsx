import type { NextPage } from 'next';
import Link from 'next/link';
import { IoChatbox } from 'react-icons/io5';
import { HomeContainer as Container } from '../styles/home';

const Home: NextPage = () => {
	return (
		<Container>
			<article>
				<h1>
					<IoChatbox />
					<span>Messenger</span>
				</h1>
				<section>
					<p>Get in touch of your friends instantily for free.</p>

					<Link href={'/'}>
						<span>Start Messaging</span>
					</Link>
				</section>
			</article>
		</Container>
	);
};

export default Home;
