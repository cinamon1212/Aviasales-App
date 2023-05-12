import { SET_SEARCH_ID } from '../types';

const initialState = {
  searchId: '',
};

export const setSearchIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_ID:
      return { ...state, searchId: action.searchId };

    default:
      return state;
  }
};
