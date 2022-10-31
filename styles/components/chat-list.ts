import styled from 'styled-components';

export const ChatListContainer = styled.section`
  width: 300px;
  background: rgb(${({ theme }) => theme.background});
  position: relative;
  padding-left: 45px;

  ::-webkit-scrollbar {
    width: 0;
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: none;
  }

  .top-container {
    position: sticky;
    top: 0;
    left: 0;
    padding: 20px 10px;
    width: inherit;
    height: auto;
    box-shadow: -5px 1px 10px rgba(${({ theme }) => theme.accent}, 0.1);
    background: rgba(${({ theme }) => theme.background}, 0.6);
    backdrop-filter: blur(5px);
    z-index: 500;

    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      font-weight: 600;
      padding-left: 10px;
      line-height: 1.6rem;
    }

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
        border-radius: 12px;
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

  .chats-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: auto;
    width: 100%;
    padding: 20px 10px;

    .chat {
      width: 100%;
      position: relative;
      padding: 10px;
      line-height: 1.2rem;
      cursor: pointer;
      border-radius: 12px;
      gap: 5px;

      :hover {
        background: rgb(${({ theme }) => theme.foreground});
        transition: all 200ms ease;
      }

      .date {
        font-size: 0.8rem;
        white-space: nowrap;
        position: absolute;
        top: 5px;
        right: 8px;
      }

      .status-container {
        padding-left: 50px;
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
          width: inherit;
          height: inherit;
          object-fit: cover;
        }
      }
    }
  }

  .dead-zone {
    width: 100%;
    display: grid;
    place-content: center;
    svg {
      color: rgb(${({ theme }) => theme.secondary});
      width: 40px;
      height: 40px;
    }
  }
`;
