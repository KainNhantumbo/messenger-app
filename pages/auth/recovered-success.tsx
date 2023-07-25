import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Package from '../../package.json';
import { NextRouter, useRouter } from 'next/router';
import { IoChatbubbleEllipses, IoOpenOutline } from 'react-icons/io5';
import { SuccessContainer as Container } from '../../styles/common/account-success';

const RecoveredSuccess: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter();

  return (
    <Container>
      <header className='upper-container'>
        <h1>
          <IoChatbubbleEllipses />
          <span>{Package.name}</span>
        </h1>
        <h5>Your are online again...</h5>
      </header>
      <main>
        <article>
          <h2>Congratulations! Your account was recovered successfully.</h2>
          <p>
            Please keep your recovery key in a safe place, it will still be used
            to recover your account in case you forget your password again in
            the future.{' '}
            <i>Remember to not share your security code with anybody else.</i>
          </p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => router.push('/auth/sign-in')}>
            <IoOpenOutline />
            <span>Proceed to login page</span>
          </motion.button>
        </article>
      </main>
    </Container>
  );
};

export default RecoveredSuccess;
