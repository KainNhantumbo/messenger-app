import styled from 'styled-components';
import { BaseButtonOutline } from '../defaults';

export const SuccessContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  header {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 0;
    h1 {
      position: relative;
      color: rgb(${({ theme }) => theme.primary});
      line-height: 2.4rem;
      text-transform: capitalize;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
    }
    h5 {
      text-align: center;
      line-height: 1.2rem;
      font-weight: 500;
    }
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    margin: 0 10px;

    article {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 10px;

      h2 {
        text-align: center;
        font-weight: 500;
        line-height: 1.6rem;
        font-size: 1.1rem;
      }

      p,
      div {
        line-height: 1.6rem;
        font-size: 1rem;
      }

      p {
        text-align: center;
      }

      div {
        margin-bottom: 10px;
        line-height: 2.4rem;

        h3 {
          font-size: 1rem;
          text-align: center;
          font-weight: 500;
        }

        .code {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 10px;
          p {
            padding: 10px 14px;
            user-select: text;
            color: rgb(${({ theme }) => theme.font});
            background: rgba(${({ theme }) => theme.primary}, 0.2);
            border-radius: 5px;
          }
          button {
            margin: 0;
            border-radius: 0 0 5px 5px;
          }
        }
      }

      button {
        ${BaseButtonOutline}
        margin: 0 auto;
        span {
          padding-right: 25px;
        }
      }
    }
  }
`;
