import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAsyncSearchId, setNewFiveTickets } from '../../redux/actions';
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
    dispatch(setNewFiveTickets(allTickets));
  }, [getAsyncSearchId]);

  useEffect(() => {
    dispatch(setNewFiveTickets(ticketsPart));
  }, [allTickets]);

  return (
    <>
      <div className={classes.logo}></div>
      <div className={classes['app-container']}>
        <Transfers />
        <main className={classes.main}>
          <Filter />
          <TicketList />
          <ShowMoreTickets />
        </main>
      </div>
    </>
  );
}
