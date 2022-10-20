import fetchClient from '../../api/client';
import { NextPage } from 'next';
import { SignInContainer as Container } from '../../styles/sign-in';
import { useState } from 'react';
import { ISignInData } from '../../@types/interfaces';
import { NextRouter, useRouter } from 'next/router';
import { InputEvents, SubmitEvent } from '../../@types/form';
import {
  IoChatbubbleEllipses,
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoLogInOutline,
  IoMailOutline,
} from 'react-icons/io5';
import Link from 'next/link';

const Signin: NextPage = (): JSX.Element => {
  const [formData, setFormData] = useState<ISignInData>({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router: NextRouter = useRouter();

  const handleChange = (e: InputEvents): void => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: SubmitEvent): Promise<void> => {
    e.preventDefault();
    if (formData.password.length < 6)
      return handleError('Password must have at least 6 characters.');
    try {
      const { data: user } = await fetchClient({
        method: 'post',
        url: '/auth/login',
        data: formData,
      });
      localStorage.setItem(
        'accessToken',
        JSON.stringify({ token: user.token, user: user.username })
      );
      router.push('/');
    } catch (err: any) {
      console.log(err.response?.data?.message);
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
          <span>OpenChat</span>
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
                    router.push('/account/sign-up')
                  }
                >
                  <IoLogInOutline />
                  <span>Signup</span>
                </button>
              </section>
            </form>
            <Link href={'/account/recovery'}>
              <span className='links'>
                Forgot password? Recover your account
              </span>
            </Link>
          </div>
        </article>
      </main>
      <footer>
        <div>
          Copyright &copy; 2022 <i>Kain Nhantumbo</i>
        </div>
        <div>All Rights Reserved.</div>
      </footer>
    </Container>
  );
};

export default Signin;
