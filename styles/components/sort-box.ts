import styled from 'styled-components';
import { CornerButton } from '../defaults';

export const SortBoxContainer = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 3000;
  top: 0;
  left: 0;
  user-select: none;
  position: fixed;
  display: flex;
  justify-content: flex-end;

  .dialog-prompt {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    top: 95px;
    right: 30px;
    gap: 20px;
    padding: 20px;
    background: rgb(${({ theme }) => theme.foreground});
    width: 40%;
    border-radius: 0 0 10px 10px;
    min-width: 300px;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      place-items: center;
      .quit {
        ${CornerButton}
      }

      h2 {
        font-weight: 500;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 5px;
        color: rgb(${({ theme }) => theme.primary});
      }
    }

    @media screen and (max-width: 450px) {
      width: 300px;
    }

    .prompt-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;

      div {
        position: relative;
        border: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
        background: none;
        border-radius: 8px;
        position: relative;
        padding: 1px 5px;
        font-size: 0.9rem;
        cursor: pointer;

        :hover {
          background: rgb(${({ theme }) => theme.secondary});
          color: rgb(${({ theme }) => theme.neutral});
        }

        svg {
          position: absolute;
          left: 5px;
          top: calc(50% - 8px);
          width: 18px;
          height: 18px;
        }
        span {
          font-weight: 500;
          line-height: 1.8rem;
          padding-left: 25px;
        }
      }
    }
  }
`;
