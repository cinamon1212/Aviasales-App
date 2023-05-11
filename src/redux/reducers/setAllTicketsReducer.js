import { SET_ALL_TICKETS } from '../types';

const initialState = {
  tickets: [],
};

export const setAllTicketsReducer = (state = initialState, action) => {
  let result;

  switch (action.type) {
    case SET_ALL_TICKETS:
      result = { ...state, tickets: action.tickets };

      return result;

    default:
      return state;
  }
};
