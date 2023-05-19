import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

import { actions as allTicketsActions, getAllTickets } from '../store/slices/allTicketsSlice';
import { actions as pageTicketsActions } from '../store/slices/pageTicketsSlice';
import { actions as filterActions } from '../store/slices/filterSlice';
import { actions as transfersActions } from '../store/slices/transfersSlice';
import { actions as searchIdActions, getSearchId } from '../store/slices/searchIdSlice';

const rootAction = {
  ...allTicketsActions,
  ...pageTicketsActions,
  ...filterActions,
  ...transfersActions,
  ...searchIdActions,
  getSearchId,
  getAllTickets,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
