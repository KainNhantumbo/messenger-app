import fetchClient from '../../api/client';
import { NextPage } from 'next';
import { SignUpContainer as Container } from '../../styles/sign-up';
import { useState } from 'react';
import { ISignUpData } from '../../@types/interfaces';
import { NextRouter, useRouter } from 'next/router';
import { InputEvents, SubmitEvent } from '../../@types/form';
import {
	IoChatbox,
	IoInformationCircleOutline,
	IoLockClosedOutline,
	IoLockOpenOutline,
	IoLogInOutline,
	IoMailOutline,
	IoPersonCircleOutline,
} from 'react-icons/io5';

const Signup: NextPage = (): JSX.Element => {
	const [formData, setFormData] = useState<ISignUpData>({
		password: '',
		confirm_password: '',
		email: '',
		username: '',
		last_name: '',
		first_name: '',
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
		if (formData.password !== formData.confirm_password)
			return handleError('Passwords must match each other.');

		try {
			const { data } = await fetchClient({
				method: 'post',
				url: '/auth/register',
				data: formData,
			});
			router.push(`/tab/message/account/${data.user_recovery}`);
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
					<IoChatbox />
					<span>Messenger</span>
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
									<IoInformationCircleOutline />

									<input
										type='text'
										placeholder='Type your first name'
										name='first_name'
										required
										onChange={(e): void => handleChange(e)}
									/>
								</div>
								<div className='form-element'>
									<IoInformationCircleOutline />

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
									<IoPersonCircleOutline />

									<input
										type='text'
										placeholder='Type your username'
										name='username'
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
									<IoLockOpenOutline />

									<input
										type='password'
										name='password'
										placeholder='Type your password'
										onChange={(e): void => handleChange(e)}
									/>
								</div>
								<div className='form-element'>
									<IoLockClosedOutline />

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
										router.push('/account/sign-in')
									}
								>
									<IoLockOpenOutline />
									<span>Login</span>
								</button>
							</section>
						</form>
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

export default Signup;
