import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";
import Footer from "../Footer/Footer";

function Movies(props) {

  React.useEffect(() => {
    props.getAllSavedMovies();
    const filteredMovies = localStorage.getItem('filteredMovies');
    if (filteredMovies && JSON.parse(filteredMovies).length > 0) {
      try {
        props.setIsMoviesNotFound(false);
        props.setCards(JSON.parse(filteredMovies));
      } catch (err) {
        console.log(err)
      }
    } else {
      props.setIsMoviesNotFound(true)
    }
  }, [])

  return(
    <>
      <Header />
      <main>
        <SearchForm
          onSearch={props.onSearch}
          filterMovies={props.filterMovies}
        />
        <MoviesCardList
          cards={props.cards}
          isLoading={props.isLoading}
          moviesAtPage={props.moviesAtPage}
          isMoviesNotFound={props.isMoviesNotFound}
          isMoviesApiErrorShown={props.isMoviesApiErrorShown}
          onCardLike={props.onCardLike}
          onDeleteButton={props.onDeleteButton}
        />
        <MoreMovies
          moviesAtPage={props.moviesAtPage}
          addMovies={props.addMovies}
          filteredMovies={props.cards}
          handleMoreMoviesClick={props.handleMoreMoviesClick}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
