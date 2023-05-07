import { CHANGE_CHECKBOX } from './types';

const initialState = {
  checked: [],
};

export const transferReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CHECKBOX:
      console.log(action);
      return { ...state, checked: [...state.checked, action.checked] };

    default:
      return state;
  }
};
