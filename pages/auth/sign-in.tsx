import {
  IoChatbubbleEllipses,
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoLogInOutline,
  IoMailOutline,
} from 'react-icons/io5';
import Link from 'next/link';
import { NextPage } from 'next';
import { useState } from 'react';
import fetch from '../../config/client';
import Package from '../../package.json';
import { actions } from '../../data/actions';
import { NextRouter, useRouter } from 'next/router';
import { ISignInData } from '../../@types/interfaces';
import { TInputEvents, TSubmitEvent } from '../../@types';
import { useAppContext } from '../../context/AppContext';
import { SignInContainer as Container } from '../../styles/common/sign-in';

const Signin: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { state, dispatch } = useAppContext();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState<ISignInData>({
    email: '',
    password: '',
  });

  const handleChange = (e: TInputEvents): void => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: TSubmitEvent): Promise<void> => {
    e.preventDefault();
    if (formData.password.length < 6)
      return handleError('Password must have at least 6 characters');
    try {
      const { data } = await fetch({
        method: 'post',
        url: '/api/v1/auth/login',
        data: formData,
        withCredentials: true,
      });
      dispatch({
        type: actions.AUTH,
        payload: {
          ...state,
          auth: { token: data?.token, userId: data?.userId },
        },
      });
      router.push(`/messenger/main?user=${data?.userId}`);
    } catch (err: any) {
      console.log(err);
      handleError(err.response?.data?.message);
    }
  };

  const handleError = (message: string): void => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  return (
    <Container>
      <header className='upper-container'>
        <h1>
          <IoChatbubbleEllipses />
          <span>{Package.name}</span>
        </h1>
        <h5>Enjoy the way you comunicate to the world!</h5>
      </header>
      <main>
        <article>
          <div className='form-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <section className='input-field'>
                <IoMailOutline />
                <input
                  type='email'
                  name='email'
                  placeholder='Type your e-mail'
                  required
                  onChange={(e): void => handleChange(e)}
                />
              </section>

              <section className='input-field'>
                <IoLockClosedOutline />
                <input
                  type='password'
                  name='password'
                  placeholder='Type your password '
                  onChange={(e): void => handleChange(e)}
                />
              </section>

              <span className='error-message'>{errorMessage}</span>
              <section className='actions'>
                <button className='login' type='submit'>
                  <IoLockOpenOutline />
                  <span>Login</span>
                </button>
                <button
                  className='register'
                  onClick={(): Promise<boolean> =>
                    router.push('/auth/sign-up')
                  }>
                  <IoLogInOutline />
                  <span>Signup</span>
                </button>
              </section>
            </form>
            <Link href={'/auth/recover-account'}>
              <span className='links'>
                Forgot password? Recover your account.
              </span>
            </Link>
          </div>
        </article>
      </main>
      <footer>
        <div>{Package.copyright}</div>
      </footer>
    </Container>
  );
};

export default Signin;
