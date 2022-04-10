import React from 'react';
import sprite from '../img/sprite.svg';
import '../sass/SideMenu.scss';
import { RowFiler } from '../services';
import SideMenuOption from './SideMenuOption';

function SideMenu() {
  return (
    <aside className="side-menu">
      <button className="side-menu__button">Create new</button>
      <ul className="side-menu__list">
        <SideMenuOption
          value={RowFiler.Even}
          caption="Even rows of data"
          subCaption="Display rows 2,4,6 etc"
          icon={`${sprite}#chart-donut`}
        />
        <SideMenuOption
          value={RowFiler.Odd}
          caption="Odd rows of data"
          subCaption="Display rows 1,3,5 etc"
          icon={`${sprite}#check-outline`}
        />
        <SideMenuOption
          value={RowFiler.All}
          caption="All data"
          subCaption="Display all data"
          icon={`${sprite}#print`}
        />
      </ul>
    </aside>
  );
}

export default SideMenu;
