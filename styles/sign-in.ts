import styled from 'styled-components';
import { BaseButton, BaseButton_Danger } from './generics/buttons';

export const SignInContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background: rgb(${({ theme }) => theme.foreground});

  * {
    ::-webkit-scrollbar {
      width: 0;
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      background: none;
    }
  }

  header {
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    h1 {
      position: relative;
      color: rgb(${({ theme }) => theme.primary});
      line-height: 2.4rem;
      text-transform: capitalize;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
    }
    h5 {
      text-align: center;
      line-height: 1.2rem;
      font-weight: 500;
    }
  }

  article {
    width: 100%;
    display: grid;
    place-content: center;
    place-items: center;
    padding: 25px;

    .form-container {
      width: 100%;
      height: auto;
      max-width: 500px;
      display: flex;
      gap: 20px;
      justify-content: flex-start;
      flex-direction: column;
      border-radius: 10px;
      padding: 35px 20px;
      margin: 25px;
      box-shadow: 0 0 25px rgba(${({ theme }) => theme.accent}, 0.2);
      border-bottom: 5px solid rgb(${({ theme }) => theme.neutral});
      background: rgb(${({ theme }) => theme.background});

      @media screen and (min-width: 440px) {
        min-width: 400px;
      }

      h2 {
        font-weight: 600;
        line-height: 2rem;
        font-size: 1.6rem;
      }

      form {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 20px;

        .input-field {
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

        .error-message {
          color: rgb(${({ theme }) => theme.secondary});
          font-weight: 500;
          font-size: 0.8rem;
          max-width: 320px;
          line-height: 1.4rem;
        }

        .actions {
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
          gap: 10px;

          .login {
            ${BaseButton}
          }
          .register {
            ${BaseButton_Danger}
          }
        }
      }
      .links {
        color: rgb(${({ theme }) => theme.secondary});
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.2rem;

        :hover {
          color: rgb(${({ theme }) => theme.alternative_a});
          transition: all 200ms ease;
        }
      }
    }
  }

  footer {
    justify-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.92rem;
    font-weight: 500;
    margin: 0 10px;
    margin-bottom: 10px;
    line-height: 1.4rem;

    i {
      color: rgb(${({ theme }) => theme.primary});
    }
  }
`;
