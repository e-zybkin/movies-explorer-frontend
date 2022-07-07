import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Profile(props) {
  return(
    <>
      <Header />
      <main>
        <section className="profile">
          <h3 className="profile__title">{`Привет, ${props.name}!`}</h3>
          <form
            className="profile__form"
            name="profile"
          >
            <div className="profile__input-box">
              <label className="profile__label">
                <p className="profile__label-caption">Имя</p>
                <input
                  required
                  minLength="2"
                  maxLength="20"
                  type="text"
                  id="name-input"
                  value={props.name}
                  className="profile__label-input profile__label-input_type_name"
                  name="name"
                />
              </label>

              <label className="profile__label">
                <p className="profile__label-caption">Email</p>
                <input
                  required
                  minLength="2"
                  maxLength="40"
                  type="text"
                  id="mail-input"
                  value="JaCkZ0212@yandex.ru"
                  className="profile__label-input profile__label-input_type_mail"
                  name="mail"
                />
              </label>
            </div>

            <button
              type="button"
              className="profile__editButton buttons"
            >Редактировать</button>
          </form>
          <Link to="/signin" className="profile__sign-out buttons">Выйти из аккаунта</Link>
        </section>
      </main>
    </>
  );
}

export default Profile;
