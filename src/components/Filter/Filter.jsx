import classes from './Filter.module.scss';

export function Filter() {
  return (
    <div className={classes.filter}>
      <button
        className={`${classes['filter__item']} ${classes['filter__item--first']} ${classes['filter__item--active']}`}
      >
        Самый дешевый
      </button>
      <button className={classes['filter__item']}>Самый быстрый</button>
      <button className={`${classes['filter__item']} ${classes['filter__item--last']}`}>Оптимальный</button>
    </div>
  );
}
