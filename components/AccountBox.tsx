import { useEffect, useState } from 'react';
import {
  IoArrowBackOutline,
  IoAtOutline,
  IoCheckmark,
  IoClose,
  IoInformationCircleOutline,
  IoLockClosedOutline,
  IoMailOutline,
  IoPencil,
  IoPersonOutline,
  IoSparklesOutline,
  IoWarningOutline,
} from 'react-icons/io5';
import { EditAccountContainer as Container } from '../styles/components/edit-account-box';
import { motion, AnimatePresence } from 'framer-motion';
import { InputEvents } from '../@types/form';
import { IUser } from '../@types/interfaces';
import type { Dispatch } from 'react';
import type { Action, State } from '../@types/reducerTypes';
import actions from '../context/actions';
import { formatDate } from '../utils/time';
import person from '../assets/temp/person.jpg';

interface IProps {
  dispatch: Dispatch<Action>;
  state: State;
  active: boolean;
  quit: () => void;
  reload: () => Promise<void> | void;
}
interface UserData extends IUser {
  password: string;
  confirm_password: string;
}

export default function AccountBox(props: IProps): JSX.Element {
  const [message, setMessage] = useState('');
  const [accountData, setAccountData] = useState<UserData>({
    _id: 'rdfgdfg',
    first_name: 'Talles',
    last_name: 'Markovich Dennisovich',
    user_name: 'Marks Bells',
    email: 'developer@mail.co.nz',
    createdAt: '2022-10-08T16:32:46.240Z',
    updatedAt: '2022-10-07T16:32:46.240Z',
    avatar: '',
    bio: 'Graphic Designer on service',
    password: '',
    confirm_password: '',
  });

  const handleChange = (e: InputEvents): void => {
    setAccountData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (): Promise<void> => {
    const { password, confirm_password } = accountData;

    if (password.length > 0 && password.length < 6)
      return console.log('Password must have at least 6 characters.');

    if (password !== confirm_password)
      return console.log('Passwords must match each other.');

    try {
      props.reload();
    } catch (err: any) {
      console.log(setMessage, err.response?.data?.message, 5000);
      console.error(err.response?.data?.message);
      console.error(err);
    }
  };

  const getInitialData = async (): Promise<void> => {
    try {
    } catch (err: any) {
      console.error(err.response?.data?.message);
      console.error(err);
    }
  };

  const editAccountController = (): void => {
    props.dispatch({
      type: actions.ACCOUNT_EDIT_MODE,
    });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  console.log(person);

  return (
    <AnimatePresence>
      {props.active && (
        <Container
          className='main'
          onClick={(e) => {
            const target = (e as any).target.classList;
            if (target.contains('main')) {
              props.quit();
            }
          }}
        >
          <motion.section
            className='dialog-modal'
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className='dialog-prompt'>
              <div className='prompt-info'>
                <button
                  title='Close Panel'
                  className='box-btn_close'
                  onClick={props.quit}
                >
                  <IoClose />
                </button>

                <span className='prompt-title'>Account</span>
                <p className='prompt-message'>View and edit account details</p>

                <section className='content-container'>
                  {props.state.isAccountEditMode ? (
                    <form onSubmit={(e) => e.preventDefault()}>
                      <section className='form-section'>
                        <div className='form-element'>
                          <IoInformationCircleOutline />
                          <input
                            type='text'
                            placeholder='Type your bio'
                            name='bio'
                            required
                            value={accountData.bio}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </section>
                      <section className='form-section'>
                        <div className='form-element'>
                          <IoPersonOutline />
                          <input
                            type='text'
                            placeholder='Type your first name'
                            name='first_name'
                            required
                            value={accountData.first_name}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <div className='form-element'>
                          <IoPersonOutline />
                          <input
                            type='text'
                            placeholder='Type your last name'
                            name='last_name'
                            required
                            value={accountData.last_name}
                            onChange={(e) => handleChange(e)}
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
                            value={accountData.user_name}
                            required
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <div className='form-element'>
                          <IoMailOutline />
                          <input
                            type='email'
                            placeholder='Type your e-mail'
                            name='email'
                            required
                            value={accountData.email}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </section>

                      <label className='alert'>
                        <IoWarningOutline />
                        <span>
                          Leave these below fields blank if you won't update
                        </span>
                      </label>

                      <section className='form-section'>
                        <div className='form-element'>
                          <IoLockClosedOutline />
                          <input
                            type='password'
                            name='password'
                            value={accountData.password}
                            placeholder='Type your password'
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <div className='form-element'>
                          <IoLockClosedOutline />
                          <input
                            type='password'
                            name='confirm_password'
                            value={accountData.confirm_password}
                            placeholder='Confirm your password'
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </section>

                      <span className='error-message'>{message}</span>
                      <div className='prompt-actions'>
                        <button
                          className='prompt-cancel'
                          onClick={editAccountController}
                        >
                          <IoArrowBackOutline />
                          <span>Cancel</span>
                        </button>
                        <button
                          className='prompt-accept'
                          onClick={handleUpdate}
                        >
                          <IoCheckmark />
                          <span>Update</span>
                        </button>
                      </div>
                    </form>
                  ) : (
                    <article className='details-container'>
                      <section>
                        <div className='image-container'>
                          <img
                            src={
                              accountData.avatar
                                ? accountData.avatar
                                : person.src
                            }
                            alt='user image'
                          />
                        </div>
                        <div className='user-details'>
                          <IoPersonOutline />
                          <span>
                            <i>Your name:</i>{' '}
                            {accountData.first_name +
                              ' ' +
                              accountData.last_name}
                          </span>
                        </div>
                        <div className='user-details'>
                          <IoAtOutline />
                          <span>
                            <i>Username:</i> {accountData.user_name}
                          </span>
                        </div>
                        <div className='user-details'>
                          <IoMailOutline />
                          <span>
                            <i>E-mail:</i> {accountData.email}
                          </span>
                        </div>
                        <div className='user-details'>
                          <IoInformationCircleOutline />
                          <span>
                            <i>Bio:</i> {accountData.bio}
                          </span>
                        </div>
                        <div className='user-details'>
                          <IoSparklesOutline />
                          <span>
                            <i>Active since:</i>{' '}
                            {formatDate(accountData.createdAt, 'LL')}
                          </span>
                        </div>

                        <div className='prompt-actions'>
                          <button
                            className='prompt-accept'
                            onClick={editAccountController}
                          >
                            <IoPencil />
                            <span>Edit Account</span>
                          </button>
                        </div>
                      </section>
                    </article>
                  )}
                </section>
              </div>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}
