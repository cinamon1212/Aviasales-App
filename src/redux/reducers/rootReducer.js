import { combineReducers } from 'redux';

import { transferReducer } from './transfersReducer';
import { filtersReducer } from './filtersReducer';
import { setSearchIdReducer } from './setSearchIdReducer';
import { setAllTicketsReducer } from './setAllTicketsReducer';
import { setPageTicketsReducer } from './setPageTicketsReducer';

export const rootReducer = combineReducers({
  transferReducer,
  filtersReducer,
  setSearchIdReducer,
  setAllTicketsReducer,
  setPageTicketsReducer,
});
