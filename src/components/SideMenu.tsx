import '../sass/SideMenu.scss';

import React from 'react';

function SideMenu() {
  return (
    <aside className="side-menu">
      <button className="side-menu__button">Create new</button>
      <ul className="side-menu__list">
        <li className="side-menu__list-item side-menu__list-item--even">
          <label>
            Even rows of data
            <span>Display rows 2,4,6 etc</span>
            <input className="visually-hidden" type="radio" value="even" radioGroup="options" />
          </label>
        </li>
        <li className="side-menu__list-item side-menu__list-item--odd">
          <label>
            Odd rows of data
            <span>Display rows 1,3,5 etc</span>
            <input className="visually-hidden" type="radio" value="odd" radioGroup="options" />
          </label>
        </li>
        <li className="side-menu__list-item side-menu__list-item--all">
          <label>
            All data
            <span>Display all data</span>
            <input className="visually-hidden" type="radio" value="all" radioGroup="options" checked={true} />
          </label>
        </li>
      </ul>
    </aside>
  );
}

export default SideMenu;
