import { useSelector } from 'react-redux';

import { useActions } from '../../hooks/useActions';

import classes from './ShowMoreTickets.module.scss';

export function ShowMoreTickets() {
  const { addFiveTickets } = useActions();

  const pageTickets = useSelector((state) => state.pageTicketsReducer);
  const allTickets = useSelector((state) => state.allTicketsReducer.allTickets);
  const addTickets = allTickets.slice(pageTickets.length, pageTickets.length + 5);

  const onShowButtonClick = (addTickets) => {
    addFiveTickets(addTickets);
  };

  return (
    <button className={classes['button-show']} onClick={() => onShowButtonClick(addTickets)}>
      показать еще 5 билетов!
    </button>
  );
}
