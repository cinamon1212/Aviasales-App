import { CHANGE_CHECKBOX } from './types';

export function changeCheckbox(checked) {
  return {
    type: CHANGE_CHECKBOX,
    checked: checked,
  };
}
