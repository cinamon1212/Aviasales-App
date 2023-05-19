import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSearchId = createAsyncThunk('searchId/getSearchId', async function () {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  const ID = await response.json();
  return ID;
});

const searchIdSlice = createSlice({
  name: 'searchId',
  initialState: '',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearchId.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { actions, reducer } = searchIdSlice;
