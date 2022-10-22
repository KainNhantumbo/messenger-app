import styled from 'styled-components';
import {
  BaseButton,
  BaseButton_Danger,
  Button_Mono_A,
  Button_Mono_B,
  StyledCornerButton,
} from '../generics/buttons';

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

            .image-container {
              width: 100%;
              display: flex;
              justify-content: center;
              padding: 8px;
              position: relative;

              img {
                border-radius: 50%;
                width: 140px;
                height: 140px;
                object-fit: cover;
                border: 4px solid rgb(${({ theme }) => theme.primary});
              }

              .camera-icon {
                width: 140px;
                height: 140px;
                border-radius: 50%;
                border: 4px solid rgb(${({ theme }) => theme.primary});
                padding: 8px;
                margin: 0 auto;
              }

              label {
                ${Button_Mono_A}
                width: 40px;
                height: 40px;
                position: absolute;
                background: rgba(${({ theme }) => theme.primary}, 0.9);
                border-radius: 50%;
                top: 100px;
                right: calc(50% - 70px);
              }
              input {
                display: none;
              }

              /* button {
                ${Button_Mono_A}
                width: 40px;
                height: 40px;
                position: absolute;
                background: rgba(${({ theme }) => theme.primary}, .9);
                border-radius: 50%;
                top: 100px;
                right: calc(50% - 70px);
              } */
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
                  rgba(${({ theme }) => theme.secondary}, 0.4);

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
            margin: 0 auto;
            font-weight: 500;
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

        .details-container {
          margin-top: 10px;

          button {
            margin-top: 10px;
          }

          section {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .image-container {
              display: grid;
              place-content: center;
              place-items: center;
              padding: 8px;

              img {
                border-radius: 50%;
                width: 160px;
                height: 160px;
                object-fit: cover;
                border: 4px solid rgb(${({ theme }) => theme.primary});
              }
            }

            .user-details {
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
              gap: 8px;
              line-height: 1.4rem;

              i {
                color: rgb(${({ theme }) => theme.secondary});
                font-weight: 500;
              }

              span {
                white-space: nowrap;
                text-overflow: ellipsis;
                color: rgb(${({ theme }) => theme.font});
              }

              svg {
                width: 18px;
                height: 18px;
                color: rgb(${({ theme }) => theme.primary});
              }
            }
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
