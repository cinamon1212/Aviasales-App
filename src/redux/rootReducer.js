import { combineReducers } from 'redux';

import { transferReducer } from './transfersReducer';

export const rootReducer = combineReducers({
  transferReducer,
});
