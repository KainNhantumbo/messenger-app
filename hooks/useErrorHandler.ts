import { AxiosError } from 'axios';
import { useState } from 'react';

export const useErrorHandler = (error: any) => {
  const [errorMessage, setErrorMessage] = useState({
    message: '',
    type: '',
  });
  
  if (error instanceof AxiosError) {
    if (error.response?.data) {
      setErrorMessage({ message: error.response?.data?.message, type: error.response?.data?.status });
      return
    }
    setErrorMessage({ type: error.name, message: error.message });
    return;
  }
  setErrorMessage({
    type: 'Unknown Error',
    message: 'An errror has occured, please try again later.',
  });
  return [errorMessage, setErrorMessage];
};


// if (error instanceof AxiosError) {
//   if (error.response?.data) {
//     let data = error.response?.data;
//     setErrorMessage(() => {
//       return { message: data?.message, type: data?.status };
//     });
//     setTimeout(() => {
//       setErrorMessage({
//         message: '',  
//         type: '',
//       });
//     }, 3000);
//     return;
//   }
//   setErrorMessage({ type: error.name, message: error.message });
//   setTimeout(() => {
//     setErrorMessage({
//       message: '',
//       type: '',
//     });
//   }, 3000);
//   return;
// }

// setErrorMessage({
//   type: 'Unknown Error',
//   message: 'An errror has occured, please try again later.',
// });
// setTimeout(() => {
//   setErrorMessage({
//     message: '',
//     type: '',
//   });
// }, 3000);