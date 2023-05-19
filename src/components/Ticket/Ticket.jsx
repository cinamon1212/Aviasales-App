import { filterTicketSegmentPart } from '../../helpers/filterTicketSegmentPart';

import classes from './Ticket.module.scss';

export function Ticket({ price, segments, carrier }) {
  const ticketPrice =
    price > 1000
      ? `${Math.floor(price / 1000)} ${price.toString().slice(price.toString().length - 3)} Р`
      : `${price} Р`;

  const firstSegment = segments[0];
  const secondSegment = segments[1];

  const {
    destination: firstDestination,
    countTransfers: firstCountTransfers,
    transfers: firstTransfers,
    dateSchedule: firstDateSchedule,
    duration: firstDuration,
  } = filterTicketSegmentPart(firstSegment);

  const {
    destination: secondDestination,
    countTransfers: secondCountTransfers,
    transfers: secondTransfers,
    dateSchedule: secondDateSchedule,
    duration: secondDuration,
  } = filterTicketSegmentPart(secondSegment);

  const createTicketColumn = (ticketHeadFirst, ticketTextFirst, ticketHeadSecond, ticketTextSecond) => {
    return (
      <div className={classes['ticket__column']}>
        <div className={classes['ticket__arrive']}>
          <span className={classes['ticket__head']}>{ticketHeadFirst}</span>
          <span className={classes['ticket__text']}>{ticketTextFirst}</span>
        </div>
        <div className={classes['ticket__arrive']}>
          <span className={classes['ticket__head']}>{ticketHeadSecond}</span>
          <span className={classes['ticket__text']}>{ticketTextSecond}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={classes['ticket']}>
      <div className={classes['ticket__title']}>
        <div className={classes['ticket__price']}>{ticketPrice}</div>
        <div className={classes['ticket__brand']}>
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="brand" />
        </div>
      </div>
      <div className={classes['ticket__flight-schedule']}>
        {createTicketColumn(firstDestination, firstDateSchedule, secondDestination, secondDateSchedule)}

        {createTicketColumn('в пути', firstDuration, 'в пути', secondDuration)}

        {createTicketColumn(firstCountTransfers, firstTransfers, secondCountTransfers, secondTransfers)}
      </div>
    </div>
  );
}
