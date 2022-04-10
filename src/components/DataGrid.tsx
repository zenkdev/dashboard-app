import classNames from 'classnames';
import React, { useContext } from 'react';

import { useData } from '../hooks/useData';
import sort from '../img/sort.svg';
import '../sass/DataGrid.scss';
import { MainContext } from './Main';

interface DataGridProps {
  className?: string;
}

function DataGrid(props: DataGridProps) {
  const { rowFilter } = useContext(MainContext);
  const { headers, data } = useData(rowFilter);
  return (
    <table className={classNames('data-grid', props.className)}>
      <thead>
        <tr className="data-grid__header">
          {headers.map(({ caption, propertyName, sortable }) => (
            <th key={propertyName} className={sortable ? 'sortable' : ''}>
              {sortable && (
                <span>
                  <img src={sort} width="16" height="46" alt="sort" />
                </span>
              )}
              {caption}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="data-grid__row">
            {headers.map(({ propertyName }) => (
              <td key={propertyName}>{row[propertyName]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="data-grid__footer">
          {headers.map(({ propertyName, searchPlaceholder }) => (
            <td key={propertyName}>
              <input type="text" size={5} placeholder={searchPlaceholder} />
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}

export default DataGrid;
