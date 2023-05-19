import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as transfersReducer } from './slices/transfersSlice';
import { reducer as searchIdReducer } from './slices/searchIdSlice';
import { reducer as pageTicketsReducer } from './slices/pageTicketsSlice';
import { reducer as filtersReducer } from './slices/filterSlice';
import { reducer as allTicketsReducer } from './slices/allTicketsSlice';
// import signUpReducer from './authorizationSlice';

const reducers = combineReducers({
  transfersReducer,
  searchIdReducer,
  pageTicketsReducer,
  filtersReducer,
  allTicketsReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
