import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { setNewFiveTickets } from '../../redux/actions';
import { sortAllTickets } from '../../helpers/sortAllTickets';
import { Ticket } from '../Ticket/Ticket';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 30,
      margin: 0,
    }}
    spin
  />
);

export function TicketList() {
  const dispatch = useDispatch();

  const allTickets = useSelector((state) => state.setAllTicketsReducer.tickets);

  const ticketsFilter = useSelector((state) => state.filtersReducer.filters);

  const transfers = useSelector((state) => state.transferReducer.checked);

  const pageTickets = useSelector((state) => state.setPageTicketsReducer.fiveTickets);

  const loader = useSelector((state) => state.setAllTicketsReducer.loaderStatus);

  const pageLoader = loader ? <Spin indicator={antIcon} /> : null;

  useEffect(() => {
    const sortedTickets = sortAllTickets(allTickets, ticketsFilter, transfers);
    console.log(sortedTickets);
    const partTickets = sortedTickets.slice(0, pageTickets.length);
    dispatch(setNewFiveTickets(partTickets));
  }, [ticketsFilter, transfers.length]);

  //   }, [ticketsFilter, transfers.length, pageTickets.length]);

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
