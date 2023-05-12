import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAsyncSearchId, setNewFiveTickets, getAsyncTickets } from '../../redux/actions';
import { Transfers } from '../Transfers/Transfers';
import { Filter } from '../Filter/Filter';
import { TicketList } from '../TicketsLIst/TicketsLIst';
import { ShowMoreTickets } from '../ShowMoreTickets/ShowMoreTickets';

import classes from './App.module.scss';

export function App() {
  const dispatch = useDispatch();

  const allTickets = useSelector((state) => state.setAllTicketsReducer.tickets);
  const ticketsPart = allTickets.slice(0, 5);

  useEffect(() => {
    dispatch(getAsyncSearchId);
  }, [getAsyncSearchId]);

  const searchId = useSelector((state) => state.setSearchIdReducer.searchId);

  useEffect(() => {
    if (searchId) {
      // dispatch(setLoaderStatus(true));
      dispatch(getAsyncTickets(searchId));
    }
  }, [searchId]);

  useEffect(() => {
    dispatch(setNewFiveTickets(ticketsPart));
  }, [ticketsPart.length]);

  const transfers = useSelector((state) => state.transferReducer.checked);

  const list = (
    <>
      <TicketList />
      <ShowMoreTickets />
    </>
  );
  const content = (
    <>
      {transfers.length ? (
        list
      ) : (
        <h2 className={classes['not-found']}>Рейсов, подходящих под заданные фильтры, не найдено...</h2>
      )}
    </>
  );

  return (
    <>
      <div className={classes.logo}></div>
      <div className={classes['app-container']}>
        <Transfers />
        <main className={classes.main}>
          <Filter />
          {content}
        </main>
      </div>
    </>
  );
}
