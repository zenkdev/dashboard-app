import '../sass/DataGrid.scss';

import React from 'react';
import classNames from 'classnames';
import { useData } from '../hooks/useData';
import sort from '../img/sort.svg';

interface DataGridProps {
  className?: string;
}

function DataGrid(props: DataGridProps) {
  const { headers, data } = useData();
  return (
    <table className={classNames('data-grid', props.className)}>
      <thead>
        <tr className="data-grid__header">
          {headers.map(header => (
            <th className={header.sortable ? 'sortable' : ''}>
              {header.sortable && (
                <span>
                  <img src={sort} width="16" height="46" alt="sort" />
                </span>
              )}
              {header.caption}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr className="data-grid__row">
            {Object.values(row).map(cell => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="data-grid__footer">
          {headers.map(header => (
            <td>
              <input type="text" size={5} placeholder={header.searchPlaceholder} />
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}

export default DataGrid;
