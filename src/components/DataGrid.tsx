import classNames from 'classnames';
import React from 'react';

import { useData } from '../hooks/useData';
import '../sass/DataGrid.scss';
import FooterCell from './FooterCell';
import HeaderCell from './HeaderCell';

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
            <HeaderCell key={header.propertyName} data={header} />
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
          {headers.map(header => (
            <FooterCell key={header.propertyName} data={header} />
          ))}
        </tr>
      </tfoot>
    </table>
  );
}

export default DataGrid;
