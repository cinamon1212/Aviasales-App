import { SET_SEARCH_ID } from '../types';

const initialState = {
  searchId: '',
};

export const setSearchIdReducer = (state = initialState, action) => {
  // console.log(action);
  let result;

  switch (action.type) {
    case SET_SEARCH_ID:
      result = { ...state, searchId: action.searchId };

      return result;

    default:
      return state;
  }
};
