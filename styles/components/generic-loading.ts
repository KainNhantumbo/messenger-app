import styled from 'styled-components';

export const GenericLoading = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  background: rgb(${({ theme }) => theme.foreground_variant});

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 35px;
    padding: 10px;

    span {
      display: grid;
      place-items: center;
      place-content: center;
    }

    h3 {
      line-height: 2rem;
      font-size: 0.92rem;
      font-weight: 500;
      text-align: center;
    }
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;
