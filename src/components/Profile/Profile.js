import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import AuthPage from "../AuthPage/AuthPage";

function Profile(props) {
  return(
    <>
      <Header />
      <main>
        <AuthPage
          name="profile"
          title={`Привет, ${props.name}!`}
          submitText="Редактировать"
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
        </AuthPage>
      </main>
    </>
  );
}

export default Profile;
