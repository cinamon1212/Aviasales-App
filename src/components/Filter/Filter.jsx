import { useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/actions';

import classes from './Filter.module.scss';

export function Filter() {
  const dispatch = useDispatch();

  const onFilterClick = (e) => {
    const classActiveButton = `${classes['filter__item--active']}`;
    const lastActiveItem = document.querySelector(`.${classActiveButton}`);
    if (lastActiveItem) lastActiveItem.classList.remove(`${classActiveButton}`);
    e.target.classList.add(`${classActiveButton}`);
    if (lastActiveItem !== e.target || !lastActiveItem) dispatch(changeFilter(e.target.textContent));
  };

  // const res = useSelector((state) => state.filtersReducer.filters);
  // console.log(res);

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
