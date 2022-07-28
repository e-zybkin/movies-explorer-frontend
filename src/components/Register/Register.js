import React from "react";
import './Register.css';
import AuthPage from "../AuthPage/AuthPage";
import { useLocation } from "react-router-dom";

function Register(props) {
  const location = useLocation();

  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isNameValid, setIsNameValid] = React.useState(false);
  const [isMailValid, setIsMailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);

  const [nameError, setNameError] = React.useState('')
  const [mailError, setMailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')

  React.useEffect(() => {
    setName('');
    setMail('');
    setPassword('');
    props.setAfterSubMessage('');
  }, [location.pathname])

  React.useEffect(() => {
    props.setAfterSubMessage('');
  }, [name, mail, password])

  React.useEffect(() => {
    if (isPasswordValid
      && isMailValid
      && isNameValid
      && name.length > 0
      && mail.length > 0
      && password.length > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [isPasswordValid, isMailValid, isNameValid, name, mail, password]);

  function handleNameChange(e) {
    const input = e.target;
    setName(input.value);
    setIsNameValid(input.validity.valid);

    if(!input.validity.valid) {
      setNameError(input.validationMessage)
    } else {
      setNameError('');
    }
  }

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
    props.handleRegister({
      name: name,
      email: mail,
      password: password,
    });

    props.setAfterSubMessage('');
    setName('');
    setMail('');
    setPassword('');
  }

  return(
    <main>
      <AuthPage
        name="register"
        title="Добро пожаловать!"
        submitText="Зарегистрироваться"
        onSubmit={handleSubmit}
        isButtonDisabled={isButtonDisabled}
        afterSubMessage={props.afterSubMessage}
        isAfterSubError={props.isAfterSubError}
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
              value={name || ''}
              onChange={handleNameChange}
            />
            <span className="auth-page__input-error name-input-error">{nameError}</span>
          </label>

          <label className="auth-page__label">
            <p className="auth-page__label-caption">Email</p>
            <input
              required
              minLength="2"
              maxLength="40"
              type="email"
              id="mail-input"
              className="auth-page__input auth-page__input_type_mail"
              name="mail"
              value={mail || ''}
              onChange={handleMailChange}
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
              id="password-input"
              className="auth-page__input auth-page__input_type_password"
              name="password"
              value={password || ''}
              onChange={handlePasswordChange}
            />
            <span className="auth-page__input-error password-input-error">{passwordError}</span>
          </label>
        </div>

      </AuthPage>
    </main>
  );
}

export default Register;
