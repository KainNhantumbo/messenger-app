import {
  IoAdd,
  IoArrowBackOutline,
  IoAtOutline,
  IoCameraOutline,
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
import { useEffect, useState } from 'react';
import { EditAccountContainer as Container } from '../styles/components/edit-account-box';
import { motion, AnimatePresence } from 'framer-motion';
import { InputEvents } from '../@types/form';
import { IUser } from '../@types/interfaces';
import { formatDate } from '../utils/time';
import person from '../assets/temp/person.jpg';
import { useAppContext } from '../context/AppContext';
import actions from '../context/actions';

interface IProps {
  reload: () => Promise<void> | void;
}

interface IAccountData {
  first_name: string;
  last_name: string;
  user_name: string;
  avatar: string;
  bio: string;
  password?: string;
  confirm_password?: string;
}
export default function AccountBox(props: IProps): JSX.Element {
  const {
    state,
    dispatch,
    accountBoxController,
    editAccountController,
    fetchAPI,
  } = useAppContext();
  const [message, setMessage] = useState('');

  const [profilePicture, setProfilePicture] = useState<FileList | null>(null);
  const [accountData, setAccountData] = useState<IAccountData>({
    first_name: '',
    last_name: '',
    user_name: '',
    avatar: '',
    bio: '',
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
    const { password, confirm_password, ...data } = accountData;
    if (password) {
      if (password?.length > 0 && password?.length < 6)
        return console.log('Password must have at least 6 characters');

      if (password !== confirm_password)
        return console.log('Passwords must match each other');
    }
    try {
      const { data: updatedData } = await fetchAPI({
        method: 'patch',
        url: '/users',
        data: { password, ...data },
      });
      dispatch({
        type: actions.USER_DATA,
        payload: { ...state, user: { ...updatedData?.user } },
      });
      setAccountData((data) => ({
        ...data,
        password: '',
        confirm_password: '',
      }));
      editAccountController();
    } catch (err: any) {
      console.log(setMessage, err.response?.data?.message, 5000);
      console.error(err.response?.data?.message);
      console.error(err);
    }
  };

  const handleProfilePicture = () => {
    const imageData: any = profilePicture?.item(0);
    if (imageData) {
      const reader = new FileReader();
      reader.readAsDataURL(imageData);
      reader.onloadend = function (e: ProgressEvent<FileReader>) {
        const data: string = e.target?.result as string;
        setAccountData((prevData) => ({ ...prevData, avatar: data }));
      };
    }
  };

  const getInitialData = async (): Promise<void> => {
    try {
      const { data } = await fetchAPI({
        method: 'get',
        url: '/users',
      });
      dispatch({
        type: actions.USER_DATA,
        payload: { ...state, user: { ...data.user } },
      });
      setAccountData({
        first_name: data.user.first_name,
        last_name: data.user.last_name,
        user_name: data.user.user_name,
        avatar: data.user.avatar,
        bio: data.user.bio,
      });
    } catch (err: any) {
      console.error(err.response?.data?.message);
      console.error(err);
    }
  };

  useEffect(() => {
    handleProfilePicture();
  }, [profilePicture]);

  useEffect(() => {
    state.isAccountBoxActive && getInitialData();
  }, [state.isAccountBoxActive]);

  return (
    <AnimatePresence>
      {state.isAccountBoxActive && (
        <Container
          className='main'
          onClick={(e) => {
            const target = (e as any).target.classList;
            if (target.contains('main')) {
              accountBoxController();
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
                  onClick={accountBoxController}
                >
                  <IoClose />
                </button>

                <span className='prompt-title'>Account</span>
                <p className='prompt-message'>View and edit account details</p>

                <section className='content-container'>
                  {state.isAccountEditMode ? (
                    <form onSubmit={(e) => e.preventDefault()}>
                      <section className='form-section'>
                        <div className='image-container'>
                          {accountData.avatar ? (
                            <img src={accountData.avatar} alt='user image' />
                          ) : state.user.avatar ? (
                            <img src={state.user.avatar} alt='user image' />
                          ) : (
                            <IoCameraOutline className='camera-icon' />
                          )}
                          <label
                            htmlFor='avatar'
                            title='Change profile picture'
                          >
                            <IoAdd />
                          </label>
                          <input
                            type='file'
                            id='avatar'
                            name='avatar'
                            accept='.jpg, .jpeg, .png'
                            multiple={false}
                            onChange={(e) => setProfilePicture(e.target.files)}
                          />
                        </div>
                      </section>
                      <section className='form-section'>
                        <div className='form-element' title='Type your bio'>
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
                        <div className='form-element' title='Type your username'>
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
                      </section>
                      <section className='form-section'>
                        <div className='form-element' title='Type your first name'>
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
                        <div className='form-element' title='Type your last name'>
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
                              state.user.avatar ? state.user.avatar : person.src
                            }
                            alt='user image'
                          />
                        </div>
                        <div className='user-details'>
                          <IoPersonOutline />
                          <span>
                            <i>Your name:</i>{' '}
                            {state.user.first_name + ' ' + state.user.last_name}
                          </span>
                        </div>
                        <div className='user-details'>
                          <IoAtOutline />
                          <span>
                            <i>Username:</i> {state.user.user_name}
                          </span>
                        </div>
                        <div className='user-details'>
                          <IoMailOutline />
                          <span>
                            <i>E-mail:</i> {state.user.email}
                          </span>
                        </div>
                        <div className='user-details'>
                          <IoInformationCircleOutline />
                          <span>
                            <i>Bio:</i> {state.user.bio}
                          </span>
                        </div>
                        <div className='user-details'>
                          <IoSparklesOutline />
                          <span>
                            <i>Active since:</i>{' '}
                            {formatDate(state.user.createdAt, 'LL')}
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
