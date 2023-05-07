import { useDispatch, useSelector } from 'react-redux';

import { changeCheckbox } from '../../redux/actions';

import classes from './Transfers.module.scss';

export function Transfers() {
  const dispatch = useDispatch();

  const checkedArray = useSelector((state) => state.transferReducer.checked);

  const checkedChange = (e, checkedArr) => {
    checkedArr.forEach((element) => {
      console.log(Object.keys(element)[0]);
    });
    const checkbox = e.currentTarget.childNodes[2].textContent;
    const checkboxStatus = e.currentTarget.childNodes[0].checked;

    dispatch(changeCheckbox({ [checkbox]: checkboxStatus }));
  };

  const labelTextArray = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  return (
    <div className={classes.transfers}>
      <h2 className={classes['transfers__title']}>количество пересадок</h2>
      <ul className={classes['transfers__list']}>
        {labelTextArray.map((text, i) => {
          // if (checkedArray.length && text in checkedArray[i]) {
          //   console.log('yes');
          // }

          return (
            <li className={classes['transfers__item']} key={i}>
              <label className={classes['transfers__check']} onChange={(e) => checkedChange(e, checkedArray)}>
                <input type="checkbox" className={classes['transfers__input']} />
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
