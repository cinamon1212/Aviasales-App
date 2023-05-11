import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAsyncTickets, setNewFiveTickets } from '../../redux/actions';
import { sortAllTickets } from '../../helpers/sortAllTickets';
import { Ticket } from '../Ticket/Ticket';

export function TicketList() {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.setSearchIdReducer.searchId);

  useEffect(() => {
    if (searchId) dispatch(getAsyncTickets(searchId));
  }, [searchId]);

  const allTickets = useSelector((state) => state.setAllTicketsReducer.tickets);

  const ticketsFilter = useSelector((state) => state.filtersReducer.filters);

  const transfers = useSelector((state) => state.transferReducer.checked);

  const pageTickets = useSelector((state) => state.setPageTicketsReducer.fiveTickets);

  useEffect(() => {
    const sortedTickets = sortAllTickets(allTickets, ticketsFilter, transfers);

    const partTickets = sortedTickets.slice(0, pageTickets.length);
    dispatch(setNewFiveTickets(partTickets));
  }, [ticketsFilter, transfers.length, pageTickets.length]);

  if (pageTickets.length)
    return (
      <>
        {pageTickets.map((ticket, i) => (
          <Ticket key={i} price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />
        ))}
      </>
    );
}
