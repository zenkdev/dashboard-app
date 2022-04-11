import classNames from 'classnames';
import React, { useCallback, useContext } from 'react';
import sprite from '../img/sprite.svg';
import '../sass/HeaderCell.scss';
import { updateSortOrder } from '../reducer';
import { Header, SortOrder } from '../services';
import { AppContext, AppDispatchContext } from './AppContext';

interface HeaderCellProps {
  data: Header;
}

function HeaderCell({ data }: HeaderCellProps) {
  const { allowSort, caption, propertyName } = data;
  const { sortOrder } = useContext(AppContext);
  const dispatch = useContext(AppDispatchContext);
  const handleSortOrderChange = useCallback(() => {
    const nextSortOrder = () => {
      switch (sortOrder[propertyName]) {
        case SortOrder.None:
          return SortOrder.Ascending;
        case SortOrder.Ascending:
          return SortOrder.Descending;
        case SortOrder.Descending:
          return SortOrder.None;
        default:
          return SortOrder.None;
      }
    };
    dispatch(updateSortOrder(propertyName, nextSortOrder()));
  }, [sortOrder, propertyName, dispatch]);
  const containerClassName = classNames('header-cell__container', {
    'header-cell__container--sortable': allowSort,
  });
  return (
    <th className="header-cell">
      <div className={containerClassName}>
        {allowSort && (
          <svg className="header-cell__icon" width="16" height="46" onClick={handleSortOrderChange}>
            <use href={`${sprite}#sort-${sortOrder[propertyName]}`} />
          </svg>
        )}
        {caption}
      </div>
    </th>
  );
}

export default HeaderCell;
