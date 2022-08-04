import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";

function Profile(props) {
  const location = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');

  const [isMailValid, setIsMailValid] = React.useState(true);
  const [isNameValid, setIsNameValid] = React.useState(true);

  const [mailError, setMailError] = React.useState('')
  const [nameError, setNameError] = React.useState('')

  React.useEffect(() => {
    props.setAfterEditMessage('');
  }, [location.pathname]);

  React.useEffect(() => {
    setName(currentUser.name);
    setMail(currentUser.email);
  }, [currentUser])

  React.useEffect(() => {
    props.setAfterEditMessage('');
  }, [name, mail])

  React.useEffect(() => {
    if (isNameValid && isMailValid && (!(name === currentUser.name) || !(mail === currentUser.email))) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }

  }, [isNameValid, isMailValid, name, mail, currentUser.name, currentUser.email]);

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
    props.onUpdate({
      name: name,
      email: mail,
    });
  }

  return(
    <>
      <Header
        setAfterEditMessage={props.setAfterEditMessage}
        loggedIn={props.loggedIn}
      />
      <main>
        <section className="profile">
          <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
          <form
            className="profile__form"
            name="profile"
            onSubmit={handleSubmit}
          >
            <div className="profile__input-box">
              <label className="profile__label">
                <div className="profile__label-box">
                  <p className="profile__label-caption">Имя</p>
                  <input
                    required
                    minLength="2"
                    maxLength="20"
                    type="text"
                    id="name-input"
                    pattern="[a-zA-Zа-яА-Я\s\-]+"
                    value={name || ''}
                    onChange={handleNameChange}
                    className="profile__label-input profile__label-input_type_name"
                    name="name"
                  />
                </div>
                <span className="profile__label-input-error">{nameError}</span>
              </label>

              <label className="profile__label">
                <div  className="profile__label-box">
                  <p className="profile__label-caption">Email</p>
                  <input
                    required
                    minLength="2"
                    maxLength="40"
                    type="email"
                    id="mail-input"
                    value={mail || ''}
                    onChange={handleMailChange}
                    className="profile__label-input profile__label-input_type_mail"
                    name="mail"
                  />
                </div>
                <span className="profile__label-input-error">{mailError}</span>
              </label>
            </div>

            <div className="profile__edit-box">
              <span className={`profile__after-edit ${props.isAfterEditError ? "profile__after-edit_error" : ""} ${props.afterEditMessage ? "profile__after-edit_message" : ""}`}>
                {props.afterEditMessage}
              </span>
              <button
                type="submit"
                className={`profile__editButton buttons profile__editButton_${isButtonDisabled ? 'disabled' : ''}`}
                disabled={isButtonDisabled}
              >Редактировать</button>
            </div>

          </form>
          <button
            type="button"
            className="profile__sign-out buttons"
            onClick={props.signOut}
          >Выйти из аккаунта</button>
        </section>
      </main>
    </>
  );
}

export default Profile;
