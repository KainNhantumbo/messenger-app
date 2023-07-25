import styled from 'styled-components';
import {
  BaseButton,
  BaseButton_Danger,
  Button_Mono_A,
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

      .image-container {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        
        img {
          border-radius: 50%;
          width: 150px;
          height: 150px;
          object-fit: cover;
          border: 4px solid rgb(${({ theme }) => theme.primary});
        }

        .person-icon,
        .camera-icon {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 4px solid rgb(${({ theme }) => theme.primary});
          margin: 0 auto;
          padding: 5px;
        }

        .person-icon {
          margin: 15px 0;
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
          display: flex;
          flex-direction: column;
          gap: 15px;

          p {
            line-height: 1.6rem;
            font-weight: 500;
            font-size: 0.96rem;
          }

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
  }
`;
