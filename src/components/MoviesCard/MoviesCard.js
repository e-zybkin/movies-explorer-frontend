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

  function movieDuration(minutes) {
    return(
      `${Math.floor(minutes / 60)}ч ${minutes % 60}м`
    )
  }

  function handleCardClick(e) {
    e.preventDefault();
    window.open(props.link, '_blank');
  }

  return(
    <article className="card">
      <img
        className="card__pic buttons"
        src={props.poster}
        alt="Постер фильма"
        onClick={handleCardClick}
      />
      <div className="card__desc">
        <div className="card__info">
          <h5 className="card__name">{props.name}</h5>
          <p className="card__time">{movieDuration(props.time)}</p>
        </div>
        {handleCardButton()}
      </div>
    </article>
  );
}

export default MoviesCard;
