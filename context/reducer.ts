import actions from './actions';
import type { State, Action } from '../@types/reducerTypes';

export const initialState: State = {
  isPromptActive: false,
  isAppInfoActive: false,
  isAccountBoxActive: false,
  isAccountEditMode: false,
  isThemeSelectorBoxActive: false,
  user: {
    _id: '',
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
    createdAt: '',
    updatedAt: '',
    avatar: '',
    bio: '',
    password: '',
    confirm_password: '',
  },
  userAuth: { userId: '', token: '' },
  chatsList: [
    {
      _id: 'as346dwerwgasd',
      message: 'This is just awesome.',
      avatar: '',
      date: '2022-10-08T10:32:46.240Z',
      username: 'Dave Parkov',
    },
  ],
  chatMessages: [
    {
      _id: 'styud',
      author: 'Masker',
      owner: false,
      content: 'Hello 83, can we have a meeting later?',
      createdAt: '2022-09-08T16:32:46.240Z',
      avatar: '',
    },
    {
      _id: 'styudd',
      author: 'Masker',
      owner: false,
      content:
        'O resultado da operação puxou as propriedades do meu array e listou elas para mim separando com um traço como eu determinei acima.😊😍',
      createdAt: '2022-10-06T16:32:46.240Z',
      avatar: '',
    },
    {
      _id: 'stygudd',
      author: 'Masker',
      owner: true,
      content:
        'Acima estamos pedindo para que nosso array seja selecionado do elemento 1 até o elemento 3 para gerarmos um novo array somente com os elementos que queremos, veja nosso resultado no console.😊😒🤷‍♂️',
      createdAt: '2022-10-08T16:32:46.240Z',
      avatar: '',
    },
    {
      _id: 'sde3',
      author: 'Bell',
      owner: true,
      content: 'Can we catch up later on the Nests cafe park at 9pm ?',
      createdAt: '2022-10-08T16:32:46.240Z',
      avatar: '',
    },
    {
      _id: 'sdety3',
      author: 'Bell',
      owner: true,
      content: 'Can we catch up later on the Nests cafe park at 9pm ?',
      createdAt: '2022-10-08T16:32:46.240Z',
      avatar: '',
    },
    {
      _id: 'sdeyjty3',
      author: 'Bell',
      owner: true,
      content: 'Can we catch up later on the Nests cafe park at 9pm ?',
      createdAt: '2022-10-08T16:32:46.240Z',
      avatar: '',
    },
    {
      _id: 'sdfe903',
      author: 'Bell',
      owner: false,
      content: 'Can we catch up later on the Nests cafe park at 9pm ?',
      createdAt: '2022-10-08T16:32:46.240Z',
      avatar: '',
    },
  ],
  friend: {
    _id: 'rdfgdfg',
    first_name: '',
    last_name: '',
    user_name: 'Marks Bells',
    email: 'developer@mail.co.nz',
    createdAt: '2022-10-08T16:32:46.240Z',
    updatedAt: '2022-10-07T16:32:46.240Z',
    avatar: '',
    bio: '',
    password: '',
    confirm_password: '',
  },
};

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case actions.PROMPT_BOX_CONTROL:
      return { ...state, isPromptActive: !state.isPromptActive };
    case actions.APP_INFO_BOX_CONTROL:
      return { ...state, isAppInfoActive: !state.isAppInfoActive };
    case actions.ACCOUNT_BOX_CONTROL:
      return { ...state, isAccountBoxActive: !state.isAccountBoxActive };
    case actions.ACCOUNT_EDIT_MODE:
      return { ...state, isAccountEditMode: !state.isAccountEditMode };
    case actions.THEME_SELECTOR_BOX_CONTROL:
      return {
        ...state,
        isThemeSelectorBoxActive: !state.isThemeSelectorBoxActive,
      };
    case actions.USER_AUTH:
      return {
        ...state,
        userAuth: action.payload?.userAuth!,
      };
    case actions.USER_DATA:
      return {
        ...state,
        user: action.payload?.user!,
      };
    default:
      return { ...state };
  }
}
