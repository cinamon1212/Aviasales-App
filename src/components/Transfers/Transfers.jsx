import { useSelector } from 'react-redux';

import { useActions } from '../../hooks/useActions';
// import { changeCheckbox } from '../../redux/actions';
// import { transfersActions } from '../../store/slices/transfersSlice';

import classes from './Transfers.module.scss';

export function Transfers() {
  // const dispatch = useDispatch();

  const { changeTransfersCheckbox } = useActions();

  const checkedArray = useSelector((state) => state.transfersReducer);

  const checkedChange = (e, checkedArr) => {
    const checkbox = e.currentTarget.childNodes[2].textContent;
    let resArray;

    if (checkedArr.length === 5 && checkbox === 'Все') resArray = [];
    else if (checkedArr.length === 5) {
      const copy = [...checkedArr];
      resArray = copy.filter((elem) => elem !== checkbox && elem !== 'Все');
    } else if (checkbox === 'Все') resArray = [...labelTextArray];
    else if (checkedArr.length >= 3 && !checkedArr.includes(checkbox)) resArray = [...labelTextArray];
    else resArray = checkbox;

    changeTransfersCheckbox(resArray);
  };

  const labelTextArray = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  return (
    <div className={classes.transfers}>
      <h2 className={classes['transfers__title']}>количество пересадок</h2>
      <ul className={classes['transfers__list']}>
        {labelTextArray.map((text, i) => {
          let checkedStatus = false;
          if (checkedArray && checkedArray.includes(text)) checkedStatus = true;

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
