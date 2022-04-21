/* eslint-disable linebreak-style */
import React from 'react';
import styleNav from './Nav.module.css';
import {NavLink} from 'react-router-dom';
// eslint-disable-next-line require-jsdoc
function Nav() {
  return (
    <nav className={styleNav.nav}>
      <div className={`${styleNav.NAV} ${styleNav.profile}`}>
        <NavLink to="/profile" activeClassName={styleNav.activeLink}>
        Профиль </NavLink>
      </div>
      <div className={`${styleNav.NAV} ${styleNav.tasks}`}>
        <NavLink to="/yourTasks" activeClassName={styleNav.activeLink}>
          Задачи</NavLink>{' '}
      </div>
      <div className={`${styleNav.NAV} ${styleNav.wallet}`}>
        <NavLink to="/wallet" activeClassName={styleNav.activeLink}>
          Кошелёк</NavLink>{' '}
      </div>
      <div className={`${styleNav.NAV} ${styleNav.statistics}`}>
        <NavLink to="#" activeClassName={styleNav.activeLink}>
          Статистика</NavLink>{' '}
      </div>
      <div className={`${styleNav.NAV} ${styleNav.aboutUs}`}>
        <NavLink to="#" activeClassName={styleNav.activeLink}>
          О нас</NavLink>{' '}
      </div>
    </nav>
  );
}

export default Nav;
