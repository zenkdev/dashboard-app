import '../sass/Dashboard.scss';

import React from 'react';
import DataGrid from './DataGrid';

function Dashboard() {
  return (
    <section className="app-dashboard">
      <div className="app-dashboard__header">
        <h2 className="app-dashboard__title">Dashboard</h2>
        <div className="app-dashboard__period">
          <select className="app-select">
            <option>Aug 21, 2021 · Sep 21 2021</option>
          </select>
        </div>
        <button type="button" className="app-dashboard__button app-dashboard__button--print">
          <span className="visually-hidden">Print</span>
        </button>
        <button type="button" className="app-dashboard__button app-dashboard__button--export">
          <span className="visually-hidden">Export</span>
        </button>
      </div>
      <DataGrid className="app-dashboard__data-grid" />
    </section>
  );
}

export default Dashboard;
