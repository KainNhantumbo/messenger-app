import styled from 'styled-components';

export const ChatBoxContainer = styled.section`
	border-left: 1px solid rgba(${({ theme }) => theme.accent}, 0.1);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: relative;
	max-width: 100%;
	padding: 20px;
	overflow: auto;

	.header {
		position: fixed;
		top: 0;
		left: 360px;
		width: 100%;
		height: 70px;
		background: rgb(${({ theme }) => theme.foreground});
		z-index: 5000;

		.friend-container {
			width: 100%;
			position: relative;
			padding: 10px;
			line-height: 1.2rem;
			cursor: pointer;
			border-radius: 5px;
			gap: 5px;

			.status-container {
				padding-left: 50px;
				h3 {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					font-weight: 500;
					margin-bottom: 5px;
					margin-right: 20px;
				}
				p {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					font-size: 0.9rem;
				}
			}

			.avatar-container {
				overflow: hidden;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				position: absolute;
				top: calc(50% - 20px);

				svg {
					width: inherit;
					height: inherit;
				}
				img {
					object-fit: cover;
				}
			}
		}
	}

	.messages-container {
		display: flex;
		gap: 30px;
		flex-direction: column;
		margin-top: 80px;

		.message {
			width: fit-content;
			max-width: 460px;
			line-height: 1.4rem;
			position: relative;
			display: flex;
			flex-flow: column nowrap;
			gap: 0px;

			.message-content {
				line-height: 1.4rem;
				font-size: 0.95rem;
				padding: 10px;
			}

			.time {
				display: flex;
				flex-flow: row nowrap;
				gap: 5px;
				font-size: 0.9rem;
				padding: 2px 10px;
				align-items: center;
				background: rgb(${({ theme }) => theme.secondary});
				width: fit-content;
				color: rgb(${({ theme }) => theme.neutral});
				svg {
				}
			}
		}

		.owner {
			align-self: flex-end;
			.time {
				align-self: end;
				border-radius: 10px 10px 0 10px;
			}
			.message-content {
				border-radius: 10px 0 10px 10px;
				background: rgb(${({ theme }) => theme.foreground});
			}
		}

		.friend {
			.time {
				border-radius: 10px 10px 10px 0;
			}
			.message-content {
				border-radius: 0 10px 10px 10px;
				background: rgb(${({ theme }) => theme.alternative_a});
				color: rgb(${({ theme }) => theme.neutral});
			}
		}
	}
`;
