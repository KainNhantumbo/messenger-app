import styled from 'styled-components';
import { Button_Mono_B } from '../generics/buttons';

export const ChatBoxContainer = styled.section`
  box-shadow: 0 0 1px rgba(${({ theme }) => theme.accent}, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
  max-width: calc(100% - 60px);
  padding: 20px;
  overflow: auto;

  .header {
    position: fixed;
    top: 0;
    left: 360px;
    width: 100%;
    max-width: calc(100% - 360px);
    height: 70px;
    background: rgba(${({ theme }) => theme.foreground}, 0.8);
    backdrop-filter: blur(5px);
    z-index: 5000;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;
    border-radius: 0 0 3px 3px;

    .friend-container {
      width: fit-content;
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

          :hover {
            color: rgb(${({ theme }) => theme.secondary});
            transition: all 200ms ease;
          }
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
    margin-bottom: 80px;

    .message {
      width: fit-content;
      max-width: calc(50% + 100px);
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
        font-size: 0.8rem;
        padding: 2px 10px;
        align-items: center;
        background: rgb(${({ theme }) => theme.secondary});
        width: fit-content;
        color: rgb(${({ theme }) => theme.neutral});
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

  .input-container {
    width: 100%;
    max-width: calc(100% - 360px);
    height: auto;
    position: fixed;
    bottom: 0;
    left: 360px;
    background: rgb(${({ theme }) => theme.foreground});
    padding: 10px 20px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    z-index: 5000;
    border-radius: 3px 3px 0 0;

    .message-input {
      position: relative;
      overflow: hidden;
      width: 100%;

      textarea {
        width: 100%;
        height: fit-content;
        border: none;
        padding: 10px;
        padding-left: 35px;
        line-height: 1.2rem;
        font-weight: 400;
        resize: none;
        outline: none;
        border-radius: 10px;
        background: rgb(${({ theme }) => theme.foreground});
        border: 2px solid rgba(${({ theme }) => theme.secondary}, 0.2);

        :focus {
          transition: all 500ms ease;
          border: 2px solid rgb(${({ theme }) => theme.secondary});
        }

        ::placeholder {
          color: rgba(${({ theme }) => theme.font}, 0.8);
          font-size: 0.9rem;
        }
      }

      svg {
        position: absolute;
        top: calc(50% - 20px);
        left: 10px;
        width: 20px;
        height: 20px;
        color: rgba(${({ theme }) => theme.font}, 0.5);
      }
    }

    input[type='file'] {
      opacity: 0;
      width: 0px;
      height: 0px;
      display: none;
    }

    label,
    button {
      ${Button_Mono_B}
      padding: 0;
      border: none;
      svg {
        width: 30px;
        height: auto;
      }
    }
  }
`;
