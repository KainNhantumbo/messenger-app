import styled from 'styled-components';
import { BaseButton, BaseButton_Danger } from '../generics/buttons';
import { StyledInputs, StyledLabels } from '../generics/form';

export const EditAccountContainer = styled.section`
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
    margin: 0 10px;
    box-shadow: 0 0 25px rgba(${({ theme }) => theme.accent}, 0.1);

    @media screen and (max-width: 430px) {
      gap: 5px;
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

      .content-container {
        display: flex;
        gap: 10px;
        flex-direction: column;

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;

          .form-section {
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 10px;

            @media screen and (max-width: 430px) {
              flex-direction: column;
              gap: 5px;
            }
            .form-element {
              display: flex;
              flex-direction: column;
              width: 100%;
              gap: 5px;

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
                border-radius: 3px;
                background: rgb(${({ theme }) => theme.foreground});
                border-bottom: 2px solid
                  rgba(${({ theme }) => theme.secondary}, 0.5);

                :focus {
                  transition: all 500ms ease;
                  border-bottom: 2px solid
                    rgb(${({ theme }) => theme.secondary});
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

          .alert {
            font-size: 0.92rem;
            line-height: 1.4rem;
            padding: 0;
            display: flex;
            align-items: center;
            gap: 5px;

            svg {
              width: 18px;
              height: 18px;
              color: rgb(${({ theme }) => theme.secondary});
            }
          }

          .error-message {
            color: rgb(${({ theme }) => theme.alternative_a});
            font-weight: 500;
            font-size: 0.9rem;
          }
        }
      }
    }

    .prompt-actions {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 10px;
      .prompt-cancel {
        ${BaseButton}
      }
      .prompt-accept {
        ${BaseButton_Danger}
      }
    }
  }
`;
