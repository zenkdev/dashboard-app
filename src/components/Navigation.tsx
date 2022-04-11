import '../sass/Navigation.scss';

import React from 'react';

function Navigation() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__list-item main-nav__list-item--active">
          <a href="#">Analyze</a>
        </li>
        <li className="main-nav__list-item">
          <a href="#">My campaigns</a>
        </li>
        <li className="main-nav__list-item">
          <a href="#">Configure</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
