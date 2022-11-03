import styled from 'styled-components';
import { Button_Mono_B } from '../generics/buttons';

export const ChatBoxContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  position: relative;
  overflow: auto;
  background: rgb(${({ theme }) => theme.foreground_variant});

  ::-webkit-scrollbar {
    width: 0;
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: none;
  }

  .start-message {
    display: grid;
    place-content: center;
    place-items: center;
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
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
        line-height: 2.2rem;
        font-size: 1.2rem;
        font-weight: 500;
        text-align: center;
      }
      svg {
        width: 80px;
        height: 80px;
      }
    }
  }

  .header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(${({ theme }) => theme.foreground}, 0.8);
    backdrop-filter: blur(5px);
    z-index: 5000;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;
    box-shadow: 0px 0px 1px rgba(${({ theme }) => theme.accent}, 0.1);

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
          color: rgb(${({ theme }) => theme.secondary});
        }
      }

      .avatar-container {
        overflow: hidden;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 20px);
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
    }
  }

  .messages-container {
    display: flex;
    gap: 10px;
    flex-direction: column;
    min-height: calc(100% - 168px);
    margin-bottom: 20px;
    padding: 20px;

    .message {
      width: fit-content;
      max-width: calc(50% + 100px);
      line-height: 1.4rem;
      position: relative;
      display: flex;
      flex-flow: column nowrap;
      .message-content {
        line-height: 1.4rem;
        font-size: 0.95rem;
        padding: 10px;
        background: rgb(${({ theme }) => theme.foreground});
        box-shadow: 0px 0px 10px rgba(${({ theme }) => theme.accent}, 0.03);
        border-radius: 12px;
        margin: 5px;
      }

      .time {
        display: flex;
        flex-flow: row nowrap;
        gap: 5px;
        font-size: 0.7rem;
        align-items: center;
        width: fit-content;
        color: rgb(${({ theme }) => theme.secondary});
      }
    }

    .owner {
      align-self: flex-end;
      .time {
        align-self: end;
      }
    }

    .friend {
      .time {
        border-radius: 10px 10px 0px 0;
      }
    }
  }

  .input-container {
    width: 100%;
    height: auto;
    position: sticky;
    bottom: 0;
    left: 0;
    background: rgb(${({ theme }) => theme.foreground});
    padding: 10px 20px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    z-index: 5000;

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
        border-radius: 12px;
        background: rgb(${({ theme }) => theme.foreground_variant});
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
