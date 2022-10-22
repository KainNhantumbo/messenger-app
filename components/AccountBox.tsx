import { useEffect, useState } from 'react';
import {
  FaEnvelope,
  FaLock,
  FaUnlock,
  FaUser,
  FaUserEdit,
  FiAlertTriangle,
  HiArrowLeft,
  HiCheck,
} from 'react-icons/all';
import { EditAccountContainer as Container } from '../styles/components/edit-account-box';
import { motion, AnimatePresence } from 'framer-motion';
import { InputEvents } from '../@types/form';
import { IUser } from '../@types/interfaces';

interface Props {
  active: boolean;
  quit: () => void;
  reload: () => Promise<void> | void;
}

interface UserData extends IUser {
  password: string;
  confirm_password: string;
}

export default function AccountBox(props: Props): JSX.Element {
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

  useEffect(() => {
    getInitialData();
  }, []);

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
                <span className='prompt-title'>Edit Account </span>
                <p className='prompt-message'>
                  Here you can modify your account.
                </p>

                <section className='content-container'>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <section className='form-section'>
                      <div className='form-element'>
                        <label>
                          <FaUserEdit />
                          <span>
                            First name <i>*</i>
                          </span>
                        </label>
                        <input
                          type='text'
                          placeholder='Type your first name here.'
                          name='first_name'
                          required
                          value={accountData.first_name}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className='form-element'>
                        <label>
                          <FaUserEdit />
                          <span>
                            Last name <i>*</i>
                          </span>
                        </label>
                        <input
                          type='text'
                          placeholder='Type your last name here.'
                          name='last_name'
                          required
                          value={accountData.last_name}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </section>
                    <section className='form-section'>
                      <div className='form-element'>
                        <label>
                          <FaUser />
                          <span>
                            Username <i>*</i>
                          </span>
                        </label>
                        <input
                          type='text'
                          placeholder='Type your username here.'
                          name='user_name'
                          value={accountData.user_name}
                          required
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className='form-element'>
                        <label>
                          <FaEnvelope />
                          <span>
                            E-mail <i>*</i>
                          </span>
                        </label>
                        <input
                          type='email'
                          placeholder='Type your e-mail here.'
                          name='email'
                          required
                          value={accountData.email}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </section>

                    <label className='alert'>
                      <FiAlertTriangle />
                      <span>
                        Leave these password fields blank if you don't want to
                        update.
                      </span>
                    </label>

                    <section className='form-section'>
                      <div className='form-element'>
                        <label>
                          <FaUnlock />
                          <span>Password</span>
                        </label>
                        <input
                          type='password'
                          name='password'
                          value={accountData.password}
                          placeholder='Type your password here.'
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className='form-element'>
                        <label>
                          <FaLock />
                          <span>
                            Confirm Password <i>*</i>
                          </span>
                        </label>
                        <input
                          type='password'
                          name='confirm_password'
                          value={accountData.confirm_password}
                          placeholder='Confirm your password.'
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </section>

                    <span className='errorMessage'>{message}</span>
                    <div className='prompt-actions'>
                      <button className='prompt-cancel' onClick={props.quit}>
                        <HiArrowLeft />
                        <span>Cancel</span>
                      </button>
                      <button className='prompt-accept' onClick={handleUpdate}>
                        <HiCheck />
                        <span>Update</span>
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}
