import styled from 'styled-components';
import { StyledCornerButton } from '../generics/buttons';

export const ThemeSelectorContainer = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgb(${({ theme }) => theme.background});
  z-index: 500;
  top: 95px;
  left: 0;
  display: grid;
  place-content: center;
  user-select: none;
  position: fixed;

  .dialog-box {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background: rgb(${({ theme }) => theme.foreground});
    max-width: 500px;
    margin: 25px;
    box-shadow: 0 0 25px rgba(${({ theme }) => theme.accent}, 0.1);
    position: relative;

    button {
      ${StyledCornerButton}
      position: absolute;
      top: 15px;
      right: 15px;
    }

    .header-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
      .prompt-title {
        font-weight: 500;
        line-height: 1.6rem;
        color: rgb(${({ theme }) => theme.primary});
      }
      .prompt-message {
        line-height: 1.6rem;
        font-size: 0.92rem;
      }
    }
  }

  .box-btn_close {
    ${StyledCornerButton}
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;
