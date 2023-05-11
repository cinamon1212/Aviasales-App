import { CHANGE_FILTER } from '../types';

const initialState = {
  filters: 'Самый дешевый',
};

export const filtersReducer = (state = initialState, action) => {
  // console.log(action);
  let result;

  switch (action.type) {
    case CHANGE_FILTER:
      result = { ...state, filters: action.filter };

      return result;

    default:
      return state;
  }
};
