import {
  IoAtOutline,
  IoChatbubbleEllipses,
  IoLockClosed,
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoLogInOutline,
  IoMailOutline,
  IoPerson,
} from 'react-icons/io5';
import { NextPage } from 'next';
import { useState } from 'react';
import fetch from '../../config/client';
import Package from '../../package.json';
import { actions } from '../../data/actions';
import { ISignUpData } from '../../@types/interfaces';
import { NextRouter, useRouter } from 'next/router';
import { TInputEvents, TSubmitEvent } from '../../@types';
import { useAppContext } from '../../context/AppContext';
import { SignUpContainer as Container } from '../../styles/common/sign-up';

const Signup: NextPage = (): JSX.Element => {
  const { state, dispatch } = useAppContext();
  const router: NextRouter = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState<ISignUpData>({
    password: '',
    confirm_password: '',
    email: '',
    user_name: '',
    last_name: '',
    first_name: '',
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
      const { data } = await fetch({
        method: 'post',
        url: '/api/v1/users',
        data: formData,
      });
      dispatch({
        type: actions.ACCOUNT_SECURITY_CODE,
        payload: { ...state, accountSecurityCode: data?.userkey ?? '' },
      });
      router.push('/auth/created-success');
    } catch (err: any) {
      console.log(err?.response?.data?.message);
      handleError(err?.response?.data?.message);
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
        <h5>Launch into a amazing spaceship of adventures!</h5>
      </header>
      <main>
        <article>
          <div className='form-container'>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
              <section className='form-section'>
                <div className='form-element'>
                  <IoPerson />

                  <input
                    type='text'
                    placeholder='Type your first name'
                    name='first_name'
                    required
                    onChange={(e): void => handleChange(e)}
                  />
                </div>
                <div className='form-element'>
                  <IoPerson />

                  <input
                    type='text'
                    placeholder='Type your last name'
                    name='last_name'
                    required
                    onChange={(e): void => handleChange(e)}
                  />
                </div>
              </section>

              <section className='form-section'>
                <div className='form-element'>
                  <IoAtOutline />

                  <input
                    type='text'
                    placeholder='Type your username'
                    name='user_name'
                    required
                    onChange={(e): void => handleChange(e)}
                  />
                </div>
                <div className='form-element'>
                  <IoMailOutline />

                  <input
                    type='email'
                    placeholder='Type your e-mail'
                    name='email'
                    required
                    onChange={(e): void => handleChange(e)}
                  />
                </div>
              </section>

              <section className='form-section'>
                <div className='form-element'>
                  <IoLockClosedOutline />

                  <input
                    type='password'
                    name='password'
                    placeholder='Type your password'
                    onChange={(e): void => handleChange(e)}
                  />
                </div>
                <div className='form-element'>
                  <IoLockClosed />

                  <input
                    type='password'
                    name='confirm_password'
                    placeholder='Confirm your password'
                    onChange={(e): void => handleChange(e)}
                  />
                </div>
              </section>

              <span className='error-message'>{errorMessage}</span>

              <section className='actions'>
                <button className='next' type='submit'>
                  <IoLogInOutline />
                  <span>Get started</span>
                </button>
                <button
                  className='login'
                  onClick={(): Promise<boolean> =>
                    router.push('/auth/sign-in')
                  }>
                  <IoLockOpenOutline />
                  <span>Login</span>
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

export default Signup;
