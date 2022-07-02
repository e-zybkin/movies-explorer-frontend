import React from "react";
import './Header.css';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();

  function handleHeaderLink() {
    switch (location.pathname) {
      case '/':
        return(
          <header className="header header_type_main section">
            <img
              className="header__logo"
              src={logo}
              alt="Логотип movies-explorer"
            />
            <div className="header__auth-box">
              <Link
                to="/signup"
                className="header__reg buttons"
              >Регистрация</Link>
              <Link
                to="/signin"
                className="header__auth buttons"
              >Войти</Link>
            </div>
          </header>
        );

      default:
        return(
          <header className="header header_type_other section">
            <div className="header__links">
              <Link
                to="/"
                className="header__logo-button buttons"
              >
                <img
                  className="header__logo"
                  src={logo}
                  alt="Логотип movies-explorer"
                />
              </Link>

              <Link
                to="/movies"
                className="header__link buttons"
              >Фильмы</Link>

              <Link
                to="/saved-movies"
                className="header__link buttons"
              >Сохранённые фильмы</Link>
            </div>


            <Link
              to="/"
              className="header__account-button buttons"
            >
              Аккаунт
            </Link>
          </header>
        );
    }
  }

  return(
    <>
      {handleHeaderLink()}
    </>
  )
}

export default Header;
