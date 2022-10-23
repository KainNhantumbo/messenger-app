import { SuccessContainer as Container } from '../../styles/account-success';
import { useState, useEffect } from 'react';
import { HiArrowCircleRight } from 'react-icons/hi';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { IoChatbubbleEllipses, IoCopy, IoCopyOutline } from 'react-icons/io5';
import { useAppContext } from '../../context/AppContext';

interface PageProps {
  message: string;
  title: string;
  code?: string;
  btnText: string;
  url: string;
}

const CreatedSuccess: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { accountSecurityCode } = useAppContext();

  // const loadPage = (type: string | undefined): void => {
  //   if (type === 'recover') {
  //     setData({
  //       title: 'Password updated successfuly.',
  //       message: `Please keep your recovery key in a safe place, it will still be used to recover your account in case you forgot your password again.`,
  //       btnText: 'Proceed to login page',
  //       url: '/tab/login',
  //     });
  //   }
  // };

  return (
    <Container>
      <header className='upper-container'>
        <h1>
          <IoChatbubbleEllipses />
          <span>OpenChat</span>
        </h1>
        <h5>Final step to get started...</h5>
      </header>
      <main>
        <article>
          <h2>Congratulations! Your account was created successfuly.</h2>
          <p>
            Please keep the following code a in a safe place, it will be used to
            recover your account in case if you forgot your password.{' '}
            <i>Please don't share this code with anybody else.</i>
          </p>

          <div>
            Recovery account key:&nbsp;&nbsp;&nbsp; <i>{accountSecurityCode}</i>
            <button>
              <IoCopyOutline />
              <span>Copy</span>
            </button>
          </div>

          <button onClick={() => router.push('/account/sign-in')}>
            <HiArrowCircleRight />
            <span>Proceed to login page</span>
          </button>
        </article>
      </main>
    </Container>
  );
};

export default CreatedSuccess;
