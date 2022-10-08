import styled from 'styled-components';
import { Button_Mono_A, Button_Mono_B } from '../generics/buttons';
import { StyledInputs } from '../generics/form';

export const HeaderContainer = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	background: rgb(${({ theme }) => theme.foreground});
	position: fixed;
	left: 0;
	top: 0;
	width: 60px;
	height: 100vh;
	z-index: 10000;

	h2 {
		display: flex;
		align-items: center;
		gap: 8px;
		white-space: nowrap;
		font-size: 1.2rem;
		border: 1px solid rgba(${({ theme }) => theme.primary}, 0.1);
		padding: 2px;
		border-radius: 5px;

		svg {
			width: 30px;
			height: 30px;
			color: rgb(${({ theme }) => theme.primary});
		}
	}

	.actions-container {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		gap: 60px;
		align-items: center;
		margin-bottom: 20px;

		div {
			display: flex;
			flex-flow: column;
			gap: 8px;

			svg {
				width: 20px;
				height: 20px;
			}

			button {
				${Button_Mono_B}
				border: none;
				padding: 10px;
			}
		}
	}

	.search {
		form {
			position: relative;
			${StyledInputs}
			input {
				padding-left: 30px;
				width: 220px;
			}
			svg {
				position: absolute;
				width: 20px;
				height: 20px;
				top: calc(50% - 10px);
				left: 8px;
			}
		}
	}
`;
