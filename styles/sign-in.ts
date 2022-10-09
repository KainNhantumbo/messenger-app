import styled from 'styled-components';
import { StyledInputs, StyledLabels } from './generics/form';
import { BaseButton, BaseButton_Danger } from './generics/buttons';

export const SignInContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;

	header {
		width: 100%;
		padding: 15px;
		padding-bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		margin: 0;
		h1 {
			position: relative;
			color: rgb(${({ theme }) => theme.primary});
			line-height: 1rem;
			text-transform: capitalize;
			font-weight: 600;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: 10px;
		}
		h5 {
			text-align: center;
			line-height: 1.6rem;
			font-weight: 500;
		}
	}

	article {
		width: 100%;

		.form-container {
			width: 100%;
			max-width: 500px;
			display: flex;
			gap: 20px;
			justify-content: flex-start;
			flex-direction: column;
			border-radius: 10px;
			box-shadow: 0 0 20px rgba(${({ theme }) => theme.accent}, 0.1);
			padding: 40px 20px;

			@media screen and (min-width: 440px) {
				min-width: 400px;
			}

			h2 {
				font-weight: 600;
				line-height: 1.6rem;
				font-size: 1.6rem;
			}

			form {
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				gap: 20px;

				.input-field {
					width: 100%;
					position: relative;

					input {
						width: 100%;
						height: fit-content;
						border: none;
						padding: 10px;
						padding-left: 40px;
						line-height: 1.2rem;
						font-weight: 400;
						outline: none;
						border-radius: 5px;
						background: rgb(${({ theme }) => theme.foreground});

						::placeholder {
							color: rgba(${({ theme }) => theme.font}, 0.8);
							font-size: 0.9rem;
						}
					}

					svg {
						position: absolute;
						top: calc(50% - 10px);
						left: 10px;
						width: 20px;
						height: 20px;
						color: rgba(${({ theme }) => theme.font}, 0.5);
					}
				}

				.error-message {
					color: rgb(${({ theme }) => theme.secondary});
					font-weight: 500;
					font-size: 0.8rem;
					max-width: 320px;
					line-height: 1.4rem;
				}

				.actions {
					display: flex;
					flex-flow: row wrap;
					justify-content: flex-start;
					gap: 10px;

					.login {
						${BaseButton}
					}
					.register {
						${BaseButton_Danger}
					}
				}
			}
			.links {
				color: rgb(${({ theme }) => theme.font});
				font-size: 0.9rem;
				font-weight: 500;

				:hover {
					color: rgb(${({ theme }) => theme.alternative_a});
					transition: all 200ms ease;
				}
			}
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-weight: 500;
		margin: 0 10px;
		margin-bottom: 20px;

		i {
			color: rgb(${({ theme }) => theme.primary});
		}
	}
`;
