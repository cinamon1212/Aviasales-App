import { useDispatch, useSelector } from 'react-redux';

import { changeCheckbox } from '../../redux/actions';

import classes from './Transfers.module.scss';

export function Transfers() {
  const dispatch = useDispatch();

  const checkedArray = useSelector((state) => state.transferReducer.checked);

  const selectAllCheckbox = () => {
    const allLabel = document.querySelectorAll(`.${classes['transfers__text']}`);

    let resArray = [];

    allLabel.forEach((elem) => {
      resArray.push(elem.textContent);
    });

    dispatch(changeCheckbox(resArray));
  };

  const checkedChange = (e, checkedArr) => {
    const checkbox = e.currentTarget.childNodes[2].textContent;

    if (checkedArr.length === 5 && checkbox === 'Все') dispatch(changeCheckbox([]));
    else if (checkedArr.length === 5) {
      const copy = [...checkedArr];
      const res = copy.filter((elem) => elem !== checkbox && elem !== 'Все');
      dispatch(changeCheckbox(res));
    } else if (checkbox === 'Все') selectAllCheckbox();
    else if (checkedArr.length >= 3 && !checkedArr.includes(checkbox)) selectAllCheckbox();
    else dispatch(changeCheckbox(checkbox));
  };

  const labelTextArray = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  return (
    <div className={classes.transfers}>
      <h2 className={classes['transfers__title']}>количество пересадок</h2>
      <ul className={classes['transfers__list']}>
        {labelTextArray.map((text, i) => {
          let checkedStatus = false;
          if (checkedArray.includes(text)) checkedStatus = true;

          return (
            <li className={classes['transfers__item']} key={i}>
              <label className={classes['transfers__check']} onChange={(e) => checkedChange(e, checkedArray)}>
                <input type="checkbox" className={classes['transfers__input']} checked={checkedStatus} readOnly />
                <span className={classes['transfers__checkbox']} />
                <span className={classes['transfers__text']}>{text}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
