import React from 'react';
import sprite from '../img/sprite.svg';
import '../sass/SideMenu.scss';
import { RowFilter } from '../services';
import SideMenuOption from './SideMenuOption';

function SideMenu() {
  return (
    <aside className="side-menu">
      <button className="side-menu__button">Create new</button>
      <ul className="side-menu__list">
        <SideMenuOption
          value={RowFilter.Even}
          caption="Even rows of data"
          subCaption="Display rows 2,4,6 etc"
          icon={`${sprite}#chart-donut`}
        />
        <SideMenuOption
          value={RowFilter.Odd}
          caption="Odd rows of data"
          subCaption="Display rows 1,3,5 etc"
          icon={`${sprite}#check-outline`}
        />
        <SideMenuOption
          value={RowFilter.All}
          caption="All data"
          subCaption="Display all data"
          icon={`${sprite}#print`}
        />
      </ul>
    </aside>
  );
}

export default SideMenu;
