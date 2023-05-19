import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAllTickets = createAsyncThunk('allTickets/getAllTickets', async function (searchId, thunkApi) {
  const func = async () => {
    const getTickets = async () => {
      const link = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`;
      const response = await fetch(link);
      let result;

      if (response.ok) {
        result = await response.json();
        thunkApi.dispatch(actions.setAllTickets(result.tickets));
        if (!result.stop) func();
        else thunkApi.dispatch(actions.setLoaderStatus(false));
      } else throw new Error(`fetch to link ${link}`);
    };

    try {
      await getTickets();
    } catch (error) {
      console.log(error);
      func();
    }
  };
  return func();
});

const allTicketsSlice = createSlice({
  name: 'allTickets',
  initialState: {
    allTickets: [],
    isLoading: true,
    isStop: false,
  },
  reducers: {
    setLoaderStatus: (state, action) => {
      return { ...state, isLoading: action.payload };
    },
    setAllTickets: (state, action) => {
      return { ...state, allTickets: [...state.allTickets, ...action.payload] };
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getAllTickets.fulfilled, (state, action) => {
  //     action;
  //   });
  // },
});

export const { actions, reducer } = allTicketsSlice;
