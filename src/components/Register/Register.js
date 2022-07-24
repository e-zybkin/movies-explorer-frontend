import React from "react";
import './Register.css';
import AuthPage from "../AuthPage/AuthPage";

function Register(props) {
  const [formData, setFormData] = React.useState({
    name: '',
    mail: '',
    password: '',
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(formData);
  }

  return(
    <main>
      <AuthPage
        name="register"
        title="Добро пожаловать!"
        submitText="Зарегистрироваться"
        onSubmit={handleSubmit}
      >
        <div className="auth-page__input-box">
          <label className="auth-page__label">
            <p className="auth-page__label-caption">Имя</p>
            <input
              required
              minLength="2"
              maxLength="20"
              type="text"
              id="name-input"
              className="auth-page__input auth-page__input_type_name"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
            />
            <span className="auth-page__input-error name-input-error"></span>
          </label>

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
              value={formData.mail || ''}
              onChange={handleChange}
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
              value={formData.password || ''}
              onChange={handleChange}
            />
            <span className="auth-page__input-error password-input-error"></span>
          </label>
        </div>

      </AuthPage>
    </main>
  );
}

export default Register;
