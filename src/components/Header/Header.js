import React from "react";
import './Header.css';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg'
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
            <Link
              to="/"
              className="buttons"
            >
              <img
                className="header__logo"
                src={logo}
                alt="Логотип movies-explorer"
              />
            </Link>

            <div className="">
              <Link
                to="/movies"
                className=""
              >Фильмы</Link>
              <Link
                to="/saved-movies"
                className=""
              >Сохранённые фильмы</Link>
            </div>

            <Link
              to="/"
              className=""
            >
              <img
                src={account}
                className=""
                alt="Аккаунт"
              />
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
