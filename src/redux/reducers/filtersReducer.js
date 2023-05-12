import { CHANGE_FILTER } from '../types';

const initialState = {
  filters: '',
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, filters: action.filter };

    default:
      return state;
  }
};
