import React from "react";
import './Login.css';
import logo from '../../images/logo.svg';
import AuthPage from "../AuthPage/AuthPage";

function Login(props) {
  return(
    <main>
      <img
        className="header__logo"
        src={logo}
        alt="Логотип movies-explorer"
      />
      <AuthPage
        name="login"
        title="Рады видеть"
        submitText="Войти"
      >
        <div className="input-box">
          <input
            required
            minLength="2"
            maxLength="40"
            type="text"
            placeholder="Email"
            id="mail-input"
            className="auth-page__input auth-page__input_type_mail"
            name="mail"
          />
          <span className="auth-page__input-error mail-input-error"></span>
        </div>

        <div className="input-box">
          <input
            required
            minLength="2"
            maxLength="40"
            type="password"
            placeholder="Пароль"
            id="password-input"
            className="auth-page__input auth-page__input_type_password"
            name="password"
          />
          <span className="auth-page__input-error password-input-error"></span>
        </div>
      </AuthPage>
    </main>
  );
}

export default Login;
