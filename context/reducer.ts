import actions from './actions';
import type { State, Action } from '../@types/reducerTypes';

export const initialState: State = {};

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
