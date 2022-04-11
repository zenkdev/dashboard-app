import '../sass/Header.scss';

import React from 'react';
import logo from '../img/logo.svg';
import avatar from '../img/avatar.png';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="app-header">
      <div className="app-header__container">
        <a className="app-header__link" href="/">
          <img className="app-header__logo" src={logo} width="40" height="40" alt="logo" />
          <h1 className="app-header__title">Dashboard</h1>
        </a>
        <a
          className="app-header__button app-header__button--help"
          href="https://github.com/zenkdev/dashboard-app"
          target="_blank"
          rel="noreferrer"
        >
          Help
        </a>
        <button className="app-header__button app-header__button--upgrade">Upgrade</button>
        <img className="app-header__avatar" src={avatar} width="40" height="40" alt="avatar" />
      </div>
      <Navigation />
      <div className="app-header__line" />
    </header>
  );
}

export default Header;
