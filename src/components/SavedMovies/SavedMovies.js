import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  React.useEffect(() => {
    props.getAllSavedMovies();
    if(props.cards.length > 0) {
      props.setIsMoviesNotFound(false)
    }
  }, []);

  React.useEffect(() => {
    if(props.cards.length === 0) {
      props.setIsMoviesNotFound(true)
    }
  }, [props.cards])

  return(
    <>
      <Header />
      <main>
        <SearchForm
          onSearch={props.onSearch}
        />
        <MoviesCardList
          cards={props.cards}
          isLoading={props.isLoading}
          moviesAtPage={props.moviesAtPage}
          isMoviesNotFound={props.isMoviesNotFound}
          isMoviesApiErrorShown={props.isMoviesApiErrorShown}
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

export default SavedMovies;
