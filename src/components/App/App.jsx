import { Transfers } from '../Transfers/Transfers';
import { Filter } from '../Filter/Filter';
import { TicketList } from '../TicketsLIst/TicketsLIst';
import { ShowMoreTickets } from '../ShowMoreTickets/ShowMoreTickets';

import classes from './App.module.scss';

export function App() {
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
