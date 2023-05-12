import { SET_ALL_TICKETS, SET_LOADER_STATUS } from '../types';

const initialState = {
  tickets: [],
  loaderStatus: true,
};

export const setAllTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.tickets] };

    case SET_LOADER_STATUS:
      return { ...state, loaderStatus: action.loaderStatus };

    default:
      return state;
  }
};
