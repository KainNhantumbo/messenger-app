import styled from 'styled-components';
import {
  BaseButton,
  BaseButton_Danger,
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
    width: 380px;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background: rgb(${({ theme }) => theme.foreground});
    max-width: 400px;
    box-shadow: 0 0 20px rgba(${({ theme }) => theme.accent}, 0.1);
    position: relative;

    @media screen and (max-width: 430px) {
      gap: 5px;
      width: auto;
      margin: 0 10px;
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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        form {
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
            border-radius: 10px;
            background: rgb(${({ theme }) => theme.foreground_variant});
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

        .friends-container {
          width: inherit;
          height: inherit;
          min-height: 300px;
          max-height: 350px;
          padding: 8px;

          .friend {
            width: 100%;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            position: relative;
            padding: 12px;
            border-radius: 10px;
            gap: 8px;
            margin-bottom: 8px;
            border: 1px solid
              rgba(${({ theme }) => theme.foreground_variant}, 0.5);

            :hover {
              background: rgb(${({ theme }) => theme.foreground_variant});
              transition: all 200ms ease;
            }

            .details-container {
              line-height: 1.2rem;
              padding-left: 65px;
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
                font-size: 0.92rem;
              }
            }

            .actions-container {
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
              align-items: center;
              gap: 10px;
              width: max-content;
              align-self: flex-end;
              .prompt-add {
                ${BaseButton_Danger}
                width: max-content;
              }
              .prompt-chat {
                ${BaseButton}
              }
            }

            .avatar-container {
              overflow: hidden;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              position: absolute;
              top: 5px;
              left: 5px;
              display: grid;
              place-content: center;
              place-items: center;

              svg {
                width: inherit;
                height: inherit;
              }
              img {
                width: inherit;
                height: inherit;
                object-fit: cover;
              }
            }

            @media screen and (max-width: 405px) {
              min-width: auto;
              gap: 20px;

              .avatar-container {
                width: 45px;
                height: 45px;
                left: 10px;
                top: 10px;
              }
              .details-container {
                padding-left: 55px;
              }
            }
          }

          .status-message {
            width: inherit;
            height: inherit;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: rgb(${({ theme }) => theme.foreground_variant});
            gap: 10px;
            padding: calc(50% - 50px) 10px;

            span {
              line-height: 1.8rem;
              font-size: 0.92rem;
              text-align: center;
            }

            svg {
              width: 40px;
              height: 40px;
              color: rgb(${({ theme }) => theme.secondary});
            }
          }
        }
      }
    }
  }
`;
