import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props) {
  const location = useLocation();
  /*const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [moviesAtPage, setMoviesAtPage] = React.useState(12);
  const [addMovies, setAddMovies] = React.useState(3);

  React.useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth)
    };
  }, []);

  React.useEffect(() => {
    setMoviesWindow();
  });

  function updateWindowWidth() {
    setWindowWidth(window.innerWidth);
  }

  function setMoviesWindow() {
    if (windowWidth > 768) {
      setMoviesAtPage(windowConfig.movies_at_computer_screen);
      setAddMovies(windowConfig.add_movies_to_computer_screen);
    } else if (windowWidth > 480) {
      setMoviesAtPage(windowConfig.movies_at_tablet_screen);
      setAddMovies(windowConfig.add_movies_to_tablet_screen);
    } else {
      setMoviesAtPage(windowConfig.movies_at_phone_screen);
      setAddMovies(windowConfig.add_movies_to_phone_screen);
    }
  }*/

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
