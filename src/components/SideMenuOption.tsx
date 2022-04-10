import classNames from 'classnames';
import React, { useCallback, useContext } from 'react';
import { RowFiler } from '../services';
import { MainContext } from './Main';

interface SideMenuOptionProps {
  value: RowFiler;
  caption: string;
  subCaption: string;
  icon: string;
}

function SideMenuOption({ value, caption, subCaption, icon }: SideMenuOptionProps) {
  const { rowFilter, setRowFilter } = useContext(MainContext);
  const handleChange = useCallback(() => {
    setRowFilter(value);
  }, [setRowFilter, value]);
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
