import { SuccessContainer as Container } from '../../styles/account-success';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { NextRouter, useRouter } from 'next/router';
import {
  IoChatbubbleEllipses,
  IoCopyOutline,
  IoOpenOutline,
} from 'react-icons/io5';
import { useAppContext } from '../../context/AppContext';

const CreatedSuccess: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { accountSecurityCode } = useAppContext();

  const copyToClipboard = async (text: string): Promise<void> => {
    await navigator.clipboard.writeText(text);
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
          <h2>Congratulations! Your account was created successfuly.</h2>
          <p>
            Please keep the following code a in a safe place, it will be used to
            recover your account in case if you forget your password.{' '}
            <i>
              Please don't share this recovery account security key with anybody
              else.
            </i>
          </p>

          <div>
            <h3> Recovery account key</h3>
            <div className='code'>
              <p>{accountSecurityCode}</p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => copyToClipboard(accountSecurityCode)}
              >
                <IoCopyOutline />
                <span>Copy to clipboard</span>
              </motion.button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => router.push('/account/sign-in')}
          >
            <IoOpenOutline />
            <span>Proceed to login page</span>
          </motion.button>
        </article>
      </main>
    </Container>
  );
};

export default CreatedSuccess;
