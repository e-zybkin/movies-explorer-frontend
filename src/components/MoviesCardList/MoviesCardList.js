import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props) {
  const location = useLocation();

  return(
    <>
      {props.isLoading && (<Preloader />)}
      <section className={`cards-grid section ${location.pathname === '/saved-movies' ? 'cards-grid_type_saved' : ''}`}>
        {props.cards.slice(0, props.moviesAtPage).map((card) => (
          <MoviesCard
            key={card.id}
            poster={`https://api.nomoreparties.co${card.image.url}`}
            name={card.nameRU}
            time={card.duration}
            link={card.trailerLink}
          />
        ))}
      </section>
    </>

  );

}

export default MoviesCardList;
