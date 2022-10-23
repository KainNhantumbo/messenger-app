import { SuccessContainer as Container } from '../../styles/account-success';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import {
  IoChatbubbleEllipses,
  IoCopyOutline,
  IoOpenOutline,
} from 'react-icons/io5';
import { useAppContext } from '../../context/AppContext';

const RecoveredSuccess: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { accountSecurityCode } = useAppContext();

  return (
    <Container>
      <header className='upper-container'>
        <h1>
          <IoChatbubbleEllipses />
          <span>OpenChat</span>
        </h1>
        <h5>Your are online again...</h5>
      </header>
      <main>
        <article>
          <h2>Congratulations! Your account was recovered successfuly.</h2>
          <p>
            Please keep your recovery key in a safe place, it will still be used
            to recover your account in case you forget your password again in
            the future.{' '}
            <i>Remember to not share your security code with anybody else.</i>
          </p>

          <button onClick={() => router.push('/account/sign-in')}>
            <IoOpenOutline />
            <span>Proceed to login page</span>
          </button>
        </article>
      </main>
    </Container>
  );
};

export default RecoveredSuccess;
