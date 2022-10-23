import styled from 'styled-components';
import { StyledCornerButton } from '../generics/buttons';

export const ThemeSelectorContainer = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(${({ theme }) => theme.background}, 0.2);
  backdrop-filter: blur(2px);
  z-index: 11000;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  user-select: none;
  position: fixed;
  line-height: 1.4rem;

  .dialog-box {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background: rgb(${({ theme }) => theme.foreground});
    min-width: 300px;
    max-width: 500px;
    margin: 25px;
    box-shadow: 0 0 25px rgba(${({ theme }) => theme.accent}, 0.1);
    position: relative;

    @media screen and (max-width: 355px){
      min-width: auto;
    }

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
      span {
        font-weight: 500;
        color: rgb(${({ theme }) => theme.primary});
      }
      p {
        font-size: 0.92rem;
      }
    }

    .themes-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
      padding: 10px;

      .checkmark-icon {
        display: none;
      }

      .active,
      .inactive {
        position: relative;
        line-height: 1.4rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        padding: 10px 12px;
        border-radius: 10px;
        border-bottom: 2px solid transparent;

        svg {
          width: 20px;
          height: 20px;
        }
      }

      .active {
        background-color: rgb(${({ theme }) => theme.secondary});
        border-bottom: 2px solid rgb(${({ theme }) => theme.neutral});
        color: rgb(${({ theme }) => theme.neutral});
        position: relative;
        .checkmark-icon {
          display: block;
          position: absolute;
          top: calc(50% - 10px);
          right: 10px;
        }
      }
    }
  }
`;
