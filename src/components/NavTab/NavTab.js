import React from "react";
import './NavTab.css';
import { Link, useLocation } from 'react-router-dom';

function NavTab(props) {
  const location = useLocation();

  return(
    <div className={`navTab ${props.isOpen ? 'navTab_opened' : ''}`}>
      <div className={`navTab__content ${props.isOpen ? 'navTab__content_opened' : ''}`}>
        <div className="navTab__links">
          <Link
            to="/"
            className={`navTab__link buttons ${location.pathname === '/' ? 'navTab__link-active' : ''}`}
          >Главная</Link>

          <Link
            to="/movies"
            className={`navTab__link buttons ${location.pathname === '/movies' ? 'navTab__link-active' : ''}`}
          >Фильмы</Link>

          <Link
            to="/saved-movies"
            className={`navTab__link buttons ${location.pathname === '/saved-movies' ? 'navTab__link-active' : ''}`}
          >Сохранённые фильмы</Link>
        </div>
        <Link
          to="/profile"
          className="navTab__account-button buttons"
        >
          Аккаунт
        </Link>
      </div>
    </div>

  );
}

export default NavTab;
