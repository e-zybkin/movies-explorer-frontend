import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css'

function MoviesCard(props) {
  const location = useLocation();
  function handleCardButton() {
    switch (location.pathname) {
      case '/saved-movies':
        return(
          <button
            type="button"
            className="card__delete buttons"
          />
        );

      default:
        return(
          <button
            type="button"
            className="card__like buttons"
          />
        );
    }
  }


  return(
    <article className="card">
      <img
        className="card__pic"
        src={props.poster}
        alt="Постер фильма"
      />
      <div className="card__desc">
        <div className="card__info">
          <h5 className="card__name">{props.name}</h5>
          <p className="card__time">{props.time}</p>
        </div>
        {handleCardButton()}
      </div>
    </article>
  );
}

export default MoviesCard;
