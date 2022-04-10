import React, { useState } from 'react';
import '../sass/Main.scss';
import { RowFiler } from '../services';
import Dashboard from './Dashboard';
import SideMenu from './SideMenu';

export const MainContext = React.createContext({ rowFilter: RowFiler.All, setRowFilter: (rowFilter: RowFiler) => {} });

function Main() {
  const [rowFilter, setRowFilter] = useState(RowFiler.All);
  return (
    <main className="app-main">
      <div className="app-main__container">
        <MainContext.Provider value={{ rowFilter, setRowFilter }}>
          <SideMenu />
          <Dashboard />
        </MainContext.Provider>
      </div>
    </main>
  );
}

export default Main;
