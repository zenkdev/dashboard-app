import React from 'react';
import '../sass/Main.scss';
import Dashboard from './Dashboard';
import SideMenu from './SideMenu';

function Main() {
  return (
    <main className="app-main">
      <div className="app-main__container">
        <SideMenu />
        <Dashboard />
      </div>
    </main>
  );
}

export default Main;
