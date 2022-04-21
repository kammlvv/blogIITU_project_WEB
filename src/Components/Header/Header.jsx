/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
import React from 'react';
import logo from './../img/logo.png';
import styleHeader from './Header.module.css';
import {NavLink} from 'react-router-dom';
// eslint-disable-next-line require-jsdoc
class Header extends React.Component {
  render() {
    return (
      <header className={styleHeader.header}>
        <div className={styleHeader.logotype}>
          <NavLink to="/"><img className={styleHeader.logo} src={logo} />
          </NavLink>
        </div>
        <div className={styleHeader.login}>
          <NavLink to="#">Вход</NavLink> или <a href="#">регистрация</a>
        </div>
        <div className={styleHeader.headTask}>
          <div className={`${styleHeader.hTasks} ${styleHeader.createTask}`}>
            <NavLink to="/tasks">Создать задание</NavLink>
          </div>
          <div className={`${styleHeader.hTasks} ${styleHeader.findTask}`}>
          Найти задание
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
