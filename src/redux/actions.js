import {
  CHANGE_CHECKBOX,
  CHANGE_FILTER,
  SET_SEARCH_ID,
  SET_ALL_TICKETS,
  ADD_PART_TICKETS,
  SET_NEW_PART_TICKETS,
} from './types';

export function changeCheckbox(checked) {
  return {
    type: CHANGE_CHECKBOX,
    checked,
  };
}

export function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    filter,
  };
}

export function setSearchId(searchId) {
  return {
    type: SET_SEARCH_ID,
    searchId,
  };
}

export async function getAsyncSearchId(dispatch) {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  const result = await response.json();
  dispatch(setSearchId(result.searchId));
}

export function setAllTickets(tickets) {
  return {
    type: SET_ALL_TICKETS,
    tickets,
  };
}

export function getAsyncTickets(searchId) {
  return async (dispatch) => {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    const result = await response.json();
    dispatch(setAllTickets(result.tickets));
  };
}

export function addFiveTickets(ticketsPart) {
  return {
    type: ADD_PART_TICKETS,
    ticketsPart,
  };
}

export function setNewFiveTickets(newTicketsPart) {
  return {
    type: SET_NEW_PART_TICKETS,
    newTicketsPart,
  };
}
