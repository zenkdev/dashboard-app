import React, { useState } from 'react';
import '../sass/Main.scss';
import { RowFiler, SortOrder } from '../services';
import Dashboard from './Dashboard';
import SideMenu from './SideMenu';

export const MainContext = React.createContext({
  rowFilter: RowFiler.All,
  setRowFilter: (rowFilter: RowFiler) => {},
  sortOrder: SortOrder.Ascending,
  setSortOrder: (sortOrder: SortOrder) => {},
  searchText: '',
  setSearchText: (searchText: string) => {},
});

function Main() {
  const [rowFilter, setRowFilter] = useState(RowFiler.All);
  const [sortOrder, setSortOrder] = useState(SortOrder.Ascending);
  const [searchText, setSearchText] = useState('');
  return (
    <main className="app-main">
      <div className="app-main__container">
        <MainContext.Provider value={{ rowFilter, setRowFilter, sortOrder, setSortOrder, searchText, setSearchText }}>
          <SideMenu />
          <Dashboard />
        </MainContext.Provider>
      </div>
    </main>
  );
}

export default Main;
