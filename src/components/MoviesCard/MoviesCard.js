import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css'

function MoviesCard(props) {
  const location = useLocation();
  const [isLiked, setIsLiked] = React.useState(false);

  React.useEffect(() => {
    checkCardData();
    if(JSON.parse(localStorage.getItem('savedMovies'))) {
      checkCardLike(JSON.parse(localStorage.getItem('savedMovies')))
    }
  }, []);

  function handleLikeClick() {
    const cardImage = 'https://api.nomoreparties.co' + props.card.image.url;
    const cardThumbnail = 'https://api.nomoreparties.co' + props.card.image.formats.thumbnail.url;

    if (isLiked) {
      const likedMovie = JSON.parse(localStorage.getItem('savedMovies')).filter((savedMovie) =>
        props.card.id === savedMovie.movieId)[0];
      if (likedMovie) {
        props.onDeleteButton(likedMovie);
      }
    } else {
      checkCardData();
      props.onCardLike(props.card.country, props.card.director,
      props.card.duration, props.card.year,
      props.card.description, cardImage,
      props.card.trailerLink, cardThumbnail, props.card.id,
      props.card.nameRU, props.card.nameEN);
    }
    setIsLiked(!isLiked);
  }

  function checkCardData() {
    if (props.card.country === null) {
      props.card.country = 'Страна не указана';
    }

    if (props.card.nameRU === null) {
      props.card.nameRU = 'Название не указано'
    }

    if (props.card.nameEN === null) {
      props.card.nameEN = 'Title not specified'
    }
  }

  function checkCardLike(data) {
    if (data) {
      data.forEach((item) => {
        if(item.movieId === props.card.id) {
          setIsLiked(true)
        }
      });
    }
  }

  function handleDeleteButtonClick() {
    props.onDeleteButton(props.card);
  }

  function handleCardButton() {
    switch (location.pathname) {
      case '/saved-movies':
        return(
          <button
            type="button"
            className="card__delete buttons"
            onClick={handleDeleteButtonClick}
          />
        );

      default:
        return(
          <button
            type="button"
            className={`card__like ${isLiked && 'card__like_activated'} buttons`}
            onClick={handleLikeClick}
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
