import React from "react";
import './AuthPage.css';
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";

function AuthPage(props) {
  const location = useLocation();

  function handleAuthButton() {
    switch (location.pathname) {
      case '/signin':
        return(
          <div className="auth-link">
            <p className="auth-link__text">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="auth-link__button buttons">Регистрация</Link>
          </div>
        );

      case '/signup':
        return(
          <div className="auth-link">
            <p className="auth-link__text">Уже зарегистрированы?</p>
            <Link to="/signin" className="auth-link__button buttons">Войти</Link>
          </div>
        );

      default: return('');
    }
  }

  return(
    <section className="auth-page">
      <Link
        to="/"
        className="auth-page__logo-button buttons"
      >
        <img
          className="auth-page__logo"
          src={logo}
          alt="Логотип movies-explorer"
        />
      </Link>

      <h3 className="auth-page__title">{props.title}</h3>
      <form
        className="auth-page__form"
        name={props.name}
        onSubmit={props.onSubmit}>
        {props.children}
        <div className="auth-page__sub-box">
          <span className={`auth-page__after-sub ${props.isAfterSubError ? "auth-page__after-sub_error" : ""} ${props.afterSubMessage ? "auth-page__after-sub_message" : ""}`}>
            {props.afterSubMessage}
          </span>
          <button
            type="submit"
            className={`auth-page__subButton buttons ${props.isButtonDisabled ? 'auth-page__subButton_disabled' : ''}`}
            disabled={props.isButtonDisabled}
          >{props.submitText}</button>
        </div>
      </form>
      {handleAuthButton()}
    </section>
  );
}

export default AuthPage;
