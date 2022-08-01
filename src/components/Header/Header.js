import React from "react";
import './Header.css';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Burger from "../Burger/Burger";

function Header(props) {
  const location = useLocation();
  const [isNavTabOpen, setIsNavTabOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isNavTabOpen) return;

    document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll');
    }
  }, [isNavTabOpen])

  function handleBurgerClick() {
    setIsNavTabOpen(!isNavTabOpen)
    if(location.pathname === '/profile') {
      props.setAfterEditMessage('')
    }
  }

  function handleHeaderLink() {
    if(props.loggedIn) {
      return(
        <header className={`header ${location.pathname === '/' ? 'header_type_main' : 'header_type_other'} section`}>
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

          <Burger
            isOpen={isNavTabOpen}
            onBurgerClick={handleBurgerClick}
          />
        </header>
      );
    } else {
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
    }
  }

  return(
    <>
      {handleHeaderLink()}
    </>
  );
}

export default Header;
