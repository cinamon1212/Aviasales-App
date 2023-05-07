import classes from './Ticket.module.scss';

export function Ticket() {
  return (
    <div className={classes['ticket']}>
      <div className={classes['ticket__title']}>
        <div className={classes['ticket__price']}>13 400 Р</div>
        <div className={classes['ticket__brand']}>brand</div>
      </div>
      <div className={classes['ticket__flight-schedule']}>
        <div className={classes['ticket__column']}>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>MOW – HKT</span>
            <span className={classes['ticket__text']}>10:45 – 08:00</span>
          </div>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>MOW – HKT</span>
            <span className={classes['ticket__text']}>10:45 – 08:00</span>
          </div>
        </div>
        <div className={classes['ticket__column']}>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>MOW – HKT</span>
            <span className={classes['ticket__text']}>10:45 – 08:00</span>
          </div>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>MOW – HKT</span>
            <span className={classes['ticket__text']}>10:45 – 08:00</span>
          </div>
        </div>
        <div className={classes['ticket__column']}>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>MOW – HKT</span>
            <span className={classes['ticket__text']}>10:45 – 08:00</span>
          </div>
          <div className={classes['ticket__arrive']}>
            <span className={classes['ticket__head']}>MOW – HKT</span>
            <span className={classes['ticket__text']}>10:45 – 08:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
