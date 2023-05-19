import { createSlice } from '@reduxjs/toolkit';

const pageTicketsSlice = createSlice({
  name: 'pageTickets',
  initialState: [],
  reducers: {
    addFiveTickets: (state, action) => {
      return [...state, ...action.payload];
    },
    setNewFiveTickets: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { actions, reducer } = pageTicketsSlice;
