import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Loader } from '../Loader/Loader';
import { useActions } from '../../hooks/useActions';
import { sortAllTickets } from '../../helpers/sortAllTickets';
import { Ticket } from '../Ticket/Ticket';

export function TicketList() {
  const { setNewFiveTickets } = useActions();

  const allTickets = useSelector((state) => state.allTicketsReducer.allTickets);
  const ticketsFilter = useSelector((state) => state.filtersReducer);
  const transfers = useSelector((state) => state.transfersReducer);
  transfers;
  const pageTickets = useSelector((state) => state.pageTicketsReducer);
  const loader = useSelector((state) => state.allTicketsReducer.isLoading);
  const pageLoader = loader ? <Loader /> : null;

  useEffect(() => {
    const sortedTickets = sortAllTickets(allTickets, ticketsFilter, transfers);

    const partTickets = sortedTickets.slice(0, pageTickets.length);
    setNewFiveTickets(partTickets);
  }, [ticketsFilter, transfers.length, pageTickets.length]);

  if (pageTickets.length)
    return (
      <>
        {pageLoader}
        {pageTickets.map((ticket, i) => (
          <Ticket key={i} price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />
        ))}
      </>
    );
}
