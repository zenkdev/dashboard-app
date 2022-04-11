import classNames from 'classnames';
import React, { useCallback, useContext } from 'react';
import sprite from '../img/sprite.svg';
import '../sass/HeaderCell.scss';
import { Header, SortOrder } from '../services';
import { MainContext } from './Main';

interface HeaderCellProps {
  data: Header;
}

function HeaderCell({ data }: HeaderCellProps) {
  const { allowSort, caption } = data;
  const { sortOrder, setSortOrder } = useContext(MainContext);
  const handleSortOrderChange = useCallback(() => {
    const nextSortOrder = () => {
      switch (sortOrder) {
        case SortOrder.None:
          return SortOrder.Ascending;
        case SortOrder.Ascending:
          return SortOrder.Descending;
        case SortOrder.Descending:
          return SortOrder.None;
      }
    };
    setSortOrder(nextSortOrder());
  }, [sortOrder, setSortOrder]);
  const containerClassName = classNames('header-cell__container', {
    'header-cell__container--sortable': allowSort,
  });
  return (
    <th className="header-cell">
      <div className={containerClassName}>
        {allowSort && (
          <svg className="header-cell__icon" width="16" height="46" onClick={handleSortOrderChange}>
            <use href={`${sprite}#sort-${sortOrder}`} />
          </svg>
        )}
        {caption}
      </div>
    </th>
  );
}

export default HeaderCell;
