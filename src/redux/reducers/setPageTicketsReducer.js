import { ADD_PART_TICKETS, SET_NEW_PART_TICKETS } from '../types';

const initialState = {
  fiveTickets: [],
};

export const setPageTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PART_TICKETS:
      return {
        ...state,
        fiveTickets: [...state.fiveTickets, ...action.ticketsPart],
      };

    case SET_NEW_PART_TICKETS:
      return {
        ...state,
        fiveTickets: [...action.newTicketsPart],
      };

    default:
      return state;
  }
};
