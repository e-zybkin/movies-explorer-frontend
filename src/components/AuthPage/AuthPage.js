import React from "react";
import './AuthPage.css';
import { Link, useLocation } from "react-router-dom";

function AuthPage(props) {
  const location = useLocation();

  function handleAuthButton() {
    switch (location.pathname) {
      case '/signin':
        return(
          <div className="sign-in">
            <p>Ещё не зарегистрированы?</p>
            <Link to="/signup" className="sign-up__link buttons">Регистрация</Link>
          </div>
        );

      case '/signup':
        return(
          <div className="sign-up">
            <p>Уже зарегистрированы?</p>
            <Link to="/signin" className="sign-in__link buttons">Войти</Link>
          </div>
        );

      case '/profile':
        return(
          <div className="sign-up">
            <Link to="/signin" className="sign-in__link buttons">Выйти из аккаунта</Link>
          </div>
        );

      default: return('');
    }
  }

  return(
    <section className="auth-page">
      <h3 className="auth-page__title">{props.title}</h3>
      <form
        className={`auth-page__form auth-page__form_type_${props.name}`}
        name={props.name}
        onSubmit={props.onSubmit}>
        {props.children}
        <button
          type={`${location.pathname === '/profile' ? 'button' : 'submit'}`}
          className={`${location.pathname === '/profile' ? 'auth-page__edit' : 'auth-page__subButton'}`}
        >{props.submitText}</button>
      </form>
      {handleAuthButton()}
      {/*{props.reg ?
        location.pathname === '/profile' ?
          <div className="sign-up">
            <Link to="/signin" className="sign-in__link buttons">Выйти из аккаунта</Link>
          </div> :
            <div className="sign-in">
              <p>Ещё не зарегистрированы?</p>
              <Link to="/signup" className="sign-up__link buttons">Регистрация</Link>
            </div>
          :
            <div className="sign-up">
              <p>Уже зарегистрированы?</p>
              <Link to="/signin" className="sign-in__link buttons">Войти</Link>
            </div>
      }*/}
    </section>
  );
}

export default AuthPage;
