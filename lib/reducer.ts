import { actions } from '../data/actions';
import type { TAction, TState } from '../@types';

export const initialState: TState = {
  isPromptActive: false,
  isAppInfoActive: false,
  isAccountBoxActive: false,
  isAccountEditMode: false,
  isAccountDeleteMode: false,
  isThemeSelectorBoxActive: false,
  isFriendsNavigatorActive: false,
  isConnected: false,
  accountSecurityCode: '',
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
      user_name: '',
      email: '',
      avatar: '',
    },
  },
  userAuth: { userId: '', token: '' },
  chatsList: [],
  onlineUsers: [],
};

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case actions.PROMPT_BOX_CONTROL:
      return { ...state, isPromptActive: action.payload.isPromptActive };
    case actions.APP_INFO_BOX_CONTROL:
      return { ...state, isAppInfoActive: action.payload.isAppInfoActive };
    case actions.ACCOUNT_BOX_CONTROL:
      return {
        ...state,
        isAccountBoxActive: action.payload.isAccountBoxActive,
      };
    case actions.ACCOUNT_EDIT_MODE:
      return { ...state, isAccountEditMode: action.payload.isAccountEditMode };
    case actions.ACCOUNT_DELETE_MODE:
      return {
        ...state,
        isAccountDeleteMode: action.payload.isAccountDeleteMode,
      };
    case actions.THEME_SELECTOR_BOX_CONTROL:
      return {
        ...state,
        isThemeSelectorBoxActive: action.payload.isThemeSelectorBoxActive,
      };
    case actions.FRIENDS_NAVIGATOR_BOX_CONTROL:
      return {
        ...state,
        isFriendsNavigatorActive: action.payload.isFriendsNavigatorActive,
      };
    case actions.USER_AUTH:
      return {
        ...state,
        userAuth: action.payload.userAuth,
      };
    case actions.USER_DATA:
      return {
        ...state,
        user: action.payload.user,
      };
    case actions.FRIENDS_LIST:
      return {
        ...state,
        friendsList: action.payload.friendsList,
      };
    case actions.CHAT_DATA:
      return {
        ...state,
        chat: action.payload.chat,
      };
    case actions.CHAT_LIST_DATA:
      return {
        ...state,
        chatsList: action.payload.chatsList,
      };

    case actions.IS_CONNECTED:
      return {
        ...state,
        isConnected: action.payload.isConnected,
      };
    case actions.ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.payload.onlineUsers,
      };
    case actions.ACCOUNT_SECURITY_CODE:
      return {
        ...state,
        accountSecurityCode: action.payload.accountSecurityCode,
      };
    default:
      return { ...state };
  }
};

export default reducer;
