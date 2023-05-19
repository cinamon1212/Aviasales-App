import { createSlice } from '@reduxjs/toolkit';

const transfersSlice = createSlice({
  name: 'transfers',
  initialState: [],
  reducers: {
    changeTransfersCheckbox: (state, action) => {
      if (Array.isArray(action.payload)) return action.payload;
      else {
        if (!state.length) state.push(action.payload);
        else {
          const isExists = state.some((transfer) => transfer === action.payload);

          if (isExists) return state.filter((transfer) => transfer !== action.payload);
          else state.push(action.payload);
        }
      }
    },
  },
});

export const { actions, reducer } = transfersSlice;
