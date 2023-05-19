import { useActions } from '../../hooks/useActions';

import classes from './Filter.module.scss';

export function Filter() {
  const { setFilter } = useActions();

  const onFilterClick = (e) => {
    const classActiveButton = `${classes['filter__item--active']}`;
    const lastActiveItem = document.querySelector(`.${classActiveButton}`);
    if (lastActiveItem) lastActiveItem.classList.remove(`${classActiveButton}`);
    e.target.classList.add(`${classActiveButton}`);
    if (lastActiveItem !== e.target || !lastActiveItem) setFilter(e.target.textContent);
  };

  return (
    <div className={classes.filter}>
      <button className={`${classes['filter__item']}`} onClick={onFilterClick}>
        Самый дешевый
      </button>
      <button className={`${classes['filter__item']}`} onClick={onFilterClick}>
        Самый быстрый
      </button>
    </div>
  );
}
