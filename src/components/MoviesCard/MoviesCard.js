import React from "react";
import './MoviesCard.css'

function MoviesCard(props) {
  return(
    <article className="card">
      <img
        className="card__pic"
        src={props.poster}
        alt=""
      />
      <div className="card__desc">
        <div className="card__info">
          <h5 className="card__name">{props.name}</h5>
          <p className="card__time">{props.time}</p>
        </div>
        <button
          type="button"
          className="card__like buttons"
        />
      </div>
    </article>
  );
}

export default MoviesCard;
