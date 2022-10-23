import { SuccessContainer as Container } from '../../styles/account-success';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { IoChatbubbleEllipses, IoCopyOutline, IoOpenOutline } from 'react-icons/io5';
import { useAppContext } from '../../context/AppContext';

const CreatedSuccess: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { accountSecurityCode } = useAppContext();

  return (
    <Container>
      <header className='upper-container'>
        <h1>
          <IoChatbubbleEllipses />
          <span>OpenChat</span>
        </h1>
        <h5>Just one more final step to get started...</h5>
      </header>
      <main>
        <article>
          <h2>Congratulations! Your account was created successfuly.</h2>
          <p>
            Please keep the following code a in a safe place, it will be used to
            recover your account in case if you forget your password.{' '}
            <i>Please don't share this recovery account security key with anybody else.</i>
          </p>

          <div>
            Recovery account key:&nbsp;&nbsp;&nbsp; <i>{accountSecurityCode}</i>
            <button>
              <IoCopyOutline />
              <span>Copy</span>
            </button>
          </div>

          <button onClick={() => router.push('/account/sign-in')}>
            <IoOpenOutline />
            <span>Proceed to login page</span>
          </button>
        </article>
      </main>
    </Container>
  );
};

export default CreatedSuccess;
