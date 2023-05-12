import {
  CHANGE_CHECKBOX,
  CHANGE_FILTER,
  SET_SEARCH_ID,
  SET_ALL_TICKETS,
  ADD_PART_TICKETS,
  SET_NEW_PART_TICKETS,
  SET_LOADER_STATUS,
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

export function setLoaderStatus(loaderStatus) {
  return {
    type: SET_LOADER_STATUS,
    loaderStatus,
  };
}

export function getAsyncTickets(searchId) {
  const func = async (dispatch) => {
    const getTickets = async (dispatch) => {
      const link = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`;
      const response = await fetch(link);
      let result;
      if (response.ok) {
        // dispatch(setLoaderStatus(false));
        result = await response.json();

        console.log(result.stop);

        dispatch(setAllTickets(result.tickets));
        if (!result.stop) func(dispatch);
        else dispatch(setLoaderStatus(false));
      } else throw new Error(`fetch to link ${link}`);
    };

    try {
      await getTickets(dispatch);
    } catch (error) {
      console.log(error);
      func(dispatch);
    }
  };
  return func;
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
