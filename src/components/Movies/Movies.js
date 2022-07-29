import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";
import Footer from "../Footer/Footer";

function Movies(props) {
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
