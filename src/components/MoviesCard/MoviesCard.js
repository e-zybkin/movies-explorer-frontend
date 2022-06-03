import React from "react";
import './MoviesCard.css'

function MoviesCard(props) {
  return(
    <article>
      <img
        className=""
        src={props.poster}
        alt=""
      />
      <div>
        <div>
          <h5>{props.name}</h5>
          <p>{props.time}</p>
        </div>
        <button
          type="button"
          className=""
        />
      </div>
    </article>
  );
}

export default MoviesCard;
