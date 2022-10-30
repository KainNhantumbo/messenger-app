import actions from './actions';
import type { State, Action } from '../@types/reducerTypes';

export const initialState: State = {
  isPromptActive: false,
  isAppInfoActive: false,
  isAccountBoxActive: false,
  isAccountEditMode: false,
  isAccountDeleteMode: false,
  isThemeSelectorBoxActive: false,
  isFriendsNavigatorActive: false,
  friendsList: [],
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
  },
  chat: {
    _id: '',
    author: '',
    messages: [],
    createdAt: '',
    friend: {
      _id: '',
      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      createdAt: '',
      updatedAt: '',
      avatar: '',
      bio: '',
    },
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
    case actions.ACCOUNT_DELETE_MODE:
      return { ...state, isAccountDeleteMode: !state.isAccountDeleteMode };
    case actions.THEME_SELECTOR_BOX_CONTROL:
      return {
        ...state,
        isThemeSelectorBoxActive: !state.isThemeSelectorBoxActive,
      };
    case actions.FRIENDS_NAVIGATOR_BOX_CONTROL:
      return {
        ...state,
        isFriendsNavigatorActive: !state.isFriendsNavigatorActive,
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
    case actions.FRIENDS_LIST:
      return {
        ...state,
        friendsList: action.payload?.friendsList!,
      };
    case actions.CHAT_DATA:
      return {
        ...state,
        chat: action.payload?.chat!,
      };
    default:
      return { ...state };
  }
}
