import styled from 'styled-components';
import {
  BaseButton,
  BaseButton_Danger,
  Button_Mono_A,
  StyledCornerButton,
} from '../generics/buttons';

export const FriendsNavigatorContainer = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(${({ theme }) => theme.background}, 0.2);
  backdrop-filter: blur(2px);
  z-index: 10000;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  user-select: none;
  position: fixed;

  .dialog-prompt {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background: rgb(${({ theme }) => theme.foreground});
    max-width: 500px;
    margin: 20px;
    box-shadow: 0 0 20px rgba(${({ theme }) => theme.accent}, 0.1);
    position: relative;

    @media screen and (max-width: 430px) {
      gap: 5px;
    }

    .box-btn_close {
      ${StyledCornerButton}
      position: absolute;
      top: 15px;
      right: 15px;
    }

    .prompt-info {
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

      .prompt-actions {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
        .prompt-delete,
        .prompt-accept {
          ${BaseButton_Danger}
        }
        .prompt-edit,
        .prompt-cancel {
          ${BaseButton}
        }
      }
      .content-container {
        display: flex;
        gap: 10px;
        flex-direction: column;

        form {
          width: 100%;
          position: relative;
          overflow: hidden;

          input {
            width: 100%;
            height: fit-content;
            border: none;
            padding: 10px;
            padding-left: 35px;
            line-height: 1.2rem;
            font-weight: 400;
            outline: none;
            border-radius: 3px;
            background: rgb(${({ theme }) => theme.foreground});
            border-bottom: 2px solid transparent;

            :focus {
              transition: all 500ms ease;
              border-bottom: 2px solid rgb(${({ theme }) => theme.secondary});
            }

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
      }
    }
  }
`;
