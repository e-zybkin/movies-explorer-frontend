import React from "react";
import logo from '../../images/logo.svg';
import account from '../../images/account.svg'
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();

  function handleHeaderLink() {
    switch (location.pathname) {
      case '/':
        return(
          <div className="">
            <Link
              to="/signup"
              className=""
            >Регистрация</Link>
            <Link
              to="/signin"
              className=""
            >Войти</Link>
          </div>
        );

      default:
        return(
          <>
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
          </>
        );
    }
  }

  return(
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип movies-explorer"
      />
      <>{handleHeaderLink()}</>
    </header>
  )
}

export default Header;
