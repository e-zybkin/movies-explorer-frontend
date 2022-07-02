import React from "react";
import './Register.css';
import logo from '../../images/logo.svg';
import AuthPage from "../AuthPage/AuthPage";

function Register(props) {
  return(
    <main>
      <img
        className="header__logo"
        src={logo}
        alt="Логотип movies-explorer"
      />
      <AuthPage
        name="register"
        title="Добро пожаловать!"
        submitText="Зарегистрироваться"
      >
        <div className="input-box">
          <input
            required
            minLength="2"
            maxLength="20"
            type="text"
            placeholder="Имя"
            id="name-input"
            className="auth-page__input auth-page__input_type_name"
            name="name"
          />
          <span className="auth-page__input-error name-input-error"></span>
        </div>

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

export default Register;
