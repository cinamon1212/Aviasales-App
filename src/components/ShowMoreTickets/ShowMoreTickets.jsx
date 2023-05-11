import { useDispatch, useSelector } from 'react-redux';

import { addFiveTickets } from '../../redux/actions';

import classes from './ShowMoreTickets.module.scss';

export function ShowMoreTickets() {
  const dispatch = useDispatch();
  const pageTickets = useSelector((state) => state.setPageTicketsReducer.fiveTickets);
  const allTickets = useSelector((state) => state.setAllTicketsReducer.tickets);
  const addTickets = allTickets.slice(pageTickets.length, pageTickets.length + 5);

  const onShowButtonClick = (addTickets) => {
    dispatch(addFiveTickets(addTickets));
  };

  return (
    <button className={classes['button-show']} onClick={() => onShowButtonClick(addTickets)}>
      показать еще 5 билетов!
    </button>
  );
}
