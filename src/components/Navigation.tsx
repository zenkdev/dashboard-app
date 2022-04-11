import '../sass/Navigation.scss';

import React from 'react';

function Navigation() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__list-item main-nav__list-item--active">
          <span>Analyze</span>
        </li>
        <li className="main-nav__list-item">
          <span>My campaigns</span>
        </li>
        <li className="main-nav__list-item">
          <span>Configure</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
