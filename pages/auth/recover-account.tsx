import {
  IoChatbubbleEllipses,
  IoKeyOutline,
  IoLockClosed,
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoLogInOutline,
  IoMailOutline,
} from 'react-icons/io5';
import { NextPage } from 'next';
import { useState } from 'react';
import Package from '../../package.json';
import fetchClient from '../../config/client';
import { NextRouter, useRouter } from 'next/router';
import { IRecoverData } from '../../@types/interfaces';
import { TInputEvents, TSubmitEvent } from '../../@types';
import { SignUpContainer as Container } from '../../styles/common/sign-up';

const RecoverAccount: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState<IRecoverData>({
    password: '',
    confirm_password: '',
    email: '',
    recouvery_key: '',
  });

  const handleChange = (e: TInputEvents): void => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: TSubmitEvent): Promise<void> => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password)
      return handleError('Passwords must match each other.');

    try {
      const { data } = await fetchClient({
        method: 'post',
        url: '/auth/register',
        data: formData,
      });
      router.push(`/tab/message/auth/${data.user_recovery}`);
    } catch (err: any) {
      console.log(err.response.data?.message);
      handleError(err.response.data?.message);
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
        <h5>Get your account back on work and stay connected!</h5>
      </header>
      <main>
        <article>
          <div className='form-container'>
            <h2>Recover account</h2>
            <form onSubmit={handleSubmit}>
              <section className='form-section'>
                <div className='form-element'>
                  <IoKeyOutline />
                  <input
                    type='password'
                    placeholder='Type your recovery key'
                    name='recovery_key'
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className='form-element'>
                  <IoMailOutline />
                  <input
                    type='email'
                    placeholder='Type your e-mail'
                    name='user_email'
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </section>
              <section className='form-section'>
                <div className='form-element'>
                  <IoLockClosedOutline />
                  <input
                    type='password'
                    name='password'
                    placeholder='Type a new password'
                    onChange={(e): void => handleChange(e)}
                  />
                </div>
                <div className='form-element'>
                  <IoLockClosed />
                  <input
                    type='password'
                    name='confirm_password'
                    placeholder='Confirm password'
                    onChange={(e): void => handleChange(e)}
                  />
                </div>
              </section>

              <span className='error-message'>{errorMessage}</span>

              <section className='actions'>
                <button className='next' type='submit'>
                  <IoLogInOutline />
                  <span>Submit</span>
                </button>
                <button
                  className='login'
                  onClick={(): Promise<boolean> =>
                    router.push('/auth/sign-in')
                  }>
                  <IoLockOpenOutline />
                  <span>Go to Login</span>
                </button>
              </section>
            </form>
          </div>
        </article>
      </main>
      <footer>
        <div>{Package.copyright}</div>
      </footer>
    </Container>
  );
};

export default RecoverAccount;
