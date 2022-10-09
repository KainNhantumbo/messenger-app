import styled from 'styled-components';

export const HomeContainer = styled.main`
	display: grid;
	place-content: center;
	place-items: center;
	width: 100vw;
	height: 100vh;

	article {
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;

		h1 {
			line-height: 2.4rem;
			font-weight: 600;
			font-size: 1.8rem;
			display: flex;
			align-items: center;
			gap: 10px;
			margin-bottom: 50px;

			svg {
				width: 40px;
				height: 40px;
				color: rgb(${({ theme }) => theme.primary});
			}

			span {
				color: rgb(${({ theme }) => theme.primary});
			}
		}

		section {
			display: flex;
			flex-direction: column;
			gap: 20px;
      align-items: center;

			p {
				font-weight: 500;
				font-size: 1.1rem;
        line-height: 1.6rem;
			}

			span {
				background: rgb(${({ theme }) => theme.foreground});
				width: fit-content;
				padding: 10px 20px;
				border-radius: 5px;
        cursor: pointer;

				:hover {
					color: rgb(${({ theme }) => theme.secondary});
				}
			}
		}
	}
`;
