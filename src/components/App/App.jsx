import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Transfers } from '../Transfers/Transfers';
import { Filter } from '../Filter/Filter';
import { TicketList } from '../TicketsLIst/TicketsLIst';
import { ShowMoreTickets } from '../ShowMoreTickets/ShowMoreTickets';
import { useActions } from '../../hooks/useActions';

import classes from './App.module.scss';

export function App() {
  const { setNewFiveTickets, getAllTickets, getSearchId } = useActions();

  const allTickets = useSelector((state) => state.allTicketsReducer.allTickets);
  const transfers = useSelector((state) => state.transfersReducer);
  const searchId = useSelector((state) => state.searchIdReducer.searchId);

  const ticketsPart = allTickets.slice(0, 5);

  useEffect(() => {
    getSearchId();
  }, [getSearchId]);

  useEffect(() => {
    if (searchId) getAllTickets(searchId);
  }, [searchId]);

  useEffect(() => {
    setNewFiveTickets(ticketsPart);
  }, [ticketsPart.length]);

  const list = (
    <>
      <TicketList />
      <ShowMoreTickets />
    </>
  );

  const content = (
    <>
      {transfers && transfers.length ? (
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
