import { CHANGE_CHECKBOX } from '../types';

const initialState = {
  checked: [],
};

export const transferReducer = (state = initialState, action) => {
  let resState;
  let isNewElemNeedToBeAdd = true;

  switch (action.type) {
    case CHANGE_CHECKBOX:
      if (Array.isArray(action.checked)) resState = { ...state, checked: action.checked };
      else {
        if (!state.checked.length) {
          resState = { ...state, checked: [action.checked] };
        } else {
          state.checked.forEach((elem) => {
            if (elem === action.checked) {
              isNewElemNeedToBeAdd = false;
            }
          });

          if (isNewElemNeedToBeAdd)
            resState = {
              ...state,
              checked: [...state.checked, action.checked],
            };
          else {
            resState = {
              ...state,
              checked: state.checked.filter((elem) => elem !== action.checked),
            };
          }
        }
      }
      return resState;

    default:
      return state;
  }
};
