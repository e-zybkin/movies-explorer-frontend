import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props) {
  const location = useLocation();

  return(
    <>
      <section className={`cards-grid section ${location.pathname === '/saved-movies' ? 'cards-grid_type_saved' : ''}`}>
        {props.isLoading && (<Preloader />)}
        {props.isMoviesNotFound && (<p className='movies__not-found'>Ничего не найдено</p>)}
        {props.isMoviesApiErrorShown && (
          <p className='movies__api-error'>
            Во время запроса произошла ошибка.
            Возможно, проблема с соединением или сервер недоступен.
            Подождите немного и попробуйте ещё раз
          </p>
        )}

        {props.cards.slice(0, props.moviesAtPage).map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
            poster={`https://api.nomoreparties.co${card.image.url}`}
            name={card.nameRU}
            time={card.duration}
            link={card.trailerLink}
            onCardLike={props.onCardLike}
          />
        ))}
      </section>
    </>

  );

}

export default MoviesCardList;
