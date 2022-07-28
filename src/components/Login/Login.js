import React from "react";
import './Login.css';
import AuthPage from "../AuthPage/AuthPage";
import { useLocation } from "react-router-dom";

function Login(props) {
  const location = useLocation();

  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isMailValid, setIsMailValid] = React.useState(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);

  const [mailError, setMailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')

  React.useEffect(() => {
    setMail('');
    setPassword('');
  }, [location.pathname])

  React.useEffect(() => {
    if (isPasswordValid && isMailValid) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }

  }, [isPasswordValid, isMailValid]);

  function handlePasswordChange(e) {
    const input = e.target;
    setPassword(input.value);
    setIsPasswordValid(input.validity.valid);

    if(!input.validity.valid) {
      setPasswordError(input.validationMessage)
    } else {
      setPasswordError('');
    }
  }

  function handleMailChange(e) {
    const input = e.target;
    setMail(input.value);
    setIsMailValid(input.validity.valid);

    if(!input.validity.valid) {
      setMailError(input.validationMessage)
    } else {
      setMailError('')
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin({
      email: mail,
      password: password,
    });
  }

  return(
    <main>
      <AuthPage
        name="login"
        title="Рады видеть!"
        submitText="Войти"
        onSubmit={handleSubmit}
        isButtonDisabled={isButtonDisabled}
        afterSubMessage={props.afterSubMessage}
        isAfterSubError={props.isAfterSubError}
      >
        <div className="auth-page__input-box">
          <label className="auth-page__label">
            <p className="auth-page__label-caption">Email</p>
            <input
              required
              minLength="2"
              maxLength="40"
              type="email"
              value={mail || ''}
              onChange={handleMailChange}
              id="mail-input"
              className="auth-page__input auth-page__input_type_mail"
              name="mail"
            />
            <span className="auth-page__input-error mail-input-error">{mailError}</span>
          </label>

          <label className="auth-page__label">
            <p className="auth-page__label-caption">Пароль</p>
            <input
              required
              minLength="2"
              maxLength="40"
              type="password"
              value={password || ''}
              onChange={handlePasswordChange}
              id="password-input"
              className="auth-page__input auth-page__input_type_password"
              name="password"
            />
            <span className="auth-page__input-error password-input-error">{passwordError}</span>
          </label>
        </div>
      </AuthPage>
    </main>
  );
}

export default Login;
