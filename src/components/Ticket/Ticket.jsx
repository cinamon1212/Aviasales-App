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

  return (
    <div className={classes['ticket']}>
      <div className={classes['ticket__title']}>
        <div className={classes['ticket__price']}>{ticketPrice}</div>
        <div className={classes['ticket__brand']}>
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="brand" />
        </div>
      </div>
      <div className={classes['ticket__flight-schedule']}>
        <div className={classes['ticket__column']}>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>{firstDestination}</span>
            <span className={classes['ticket__text']}>{firstDateSchedule}</span>
          </div>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>{secondDestination}</span>
            <span className={classes['ticket__text']}>{secondDateSchedule}</span>
          </div>
        </div>
        <div className={classes['ticket__column']}>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>в пути</span>
            <span className={classes['ticket__text']}>{firstDuration}</span>
          </div>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>в пути</span>
            <span className={classes['ticket__text']}>{secondDuration}</span>
          </div>
        </div>
        <div className={classes['ticket__column']}>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>{firstCountTransfers}</span>
            <span className={classes['ticket__text']}>{firstTransfers}</span>
          </div>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>{secondCountTransfers}</span>
            <span className={classes['ticket__text']}>{secondTransfers}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
