import styled from 'styled-components';

export const MainContainer = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	max-width: 100%;
	display: grid;
	justify-items: start;
	grid-template-columns: 300px auto;
	margin-left: 45px;

	@media screen and (max-width: 600px) {
		grid-template-columns: 240px auto;
	}
`;
