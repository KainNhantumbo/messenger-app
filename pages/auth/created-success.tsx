import {
  IoChatbubbleEllipses,
  IoCopyOutline,
  IoOpenOutline,
} from 'react-icons/io5';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { NextRouter, useRouter } from 'next/router';
import { useAppContext } from '../../context/AppContext';
import { SuccessContainer as Container } from '../../styles/common/account-success';

const CreatedSuccess: NextPage = (): JSX.Element => {
  const { state } = useAppContext();
  const router: NextRouter = useRouter();

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(state.accountSecurityCode);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <Container>
      <header className='upper-container'>
        <h1>
          <IoChatbubbleEllipses />
          <span>OpenChat</span>
        </h1>
        <h5>Just one more step to get started...</h5>
      </header>
      <main>
        <article>
          <h2>Congratulations! Your account was created successfully.</h2>
          <p>
            Please keep the following code in a safe place, it will be used to
            recover your account in case you forget your password.{' '}
            <i>
              Please don't share this recovery account security key with anybody
              else.
            </i>
          </p>

          <div>
            <h3> Recovery account key</h3>
            <div className='code'>
              <p>{state.accountSecurityCode}</p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.8 }}
                onClick={copyToClipboard}>
                <IoCopyOutline />
                <span>Copy to clipboard</span>
              </motion.button>
            </div>
          </div>

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

export default CreatedSuccess;
