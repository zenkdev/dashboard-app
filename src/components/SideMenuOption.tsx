import classNames from 'classnames';
import React, { useCallback, useContext } from 'react';
import { updateRowFilter } from '../reducer';
import { RowFilter } from '../services';
import { AppContext, AppDispatchContext } from './AppContext';

interface SideMenuOptionProps {
  value: RowFilter;
  caption: string;
  subCaption: string;
  icon: string;
}

function SideMenuOption({ value, caption, subCaption, icon }: SideMenuOptionProps) {
  const { rowFilter } = useContext(AppContext);
  const dispatch = useContext(AppDispatchContext);
  const handleChange = useCallback(() => {
    dispatch(updateRowFilter(value));
  }, [dispatch, value]);
  const checked = rowFilter === value;
  const className = classNames('side-menu__list-item', { 'side-menu__list-item--active': checked });

  return (
    <li className={className} onClick={handleChange}>
      <svg className="side-menu__list-item-icon" width="28" height="28">
        <use href={icon} />
      </svg>
      <label>
        {caption}
        <span>{subCaption}</span>
        <input
          name={`side-menu-option-${value}`}
          type="radio"
          value={value}
          radioGroup="side-menu-options"
          defaultChecked={checked}
        />
      </label>
    </li>
  );
}

export default SideMenuOption;
