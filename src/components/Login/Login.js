import React from "react";
import './Login.css';
import AuthPage from "../AuthPage/AuthPage";

function Login(props) {
  return(
    <main>
      <AuthPage
        name="login"
        title="Рады видеть!"
        submitText="Войти"
      >
        <div className="auth-page__input-box">
          <label className="auth-page__label">
            <p className="auth-page__label-caption">Email</p>
            <input
              required
              minLength="2"
              maxLength="40"
              type="text"
              id="mail-input"
              className="auth-page__input auth-page__input_type_mail"
              name="mail"
            />
            <span className="auth-page__input-error mail-input-error"></span>
          </label>

          <label className="auth-page__label">
            <p className="auth-page__label-caption">Пароль</p>
            <input
              required
              minLength="2"
              maxLength="40"
              type="password"
              id="password-input"
              className="auth-page__input auth-page__input_type_password"
              name="password"
            />
            <span className="auth-page__input-error password-input-error"></span>
          </label>
        </div>
      </AuthPage>
    </main>
  );
}

export default Login;
