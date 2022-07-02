import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  return(
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList
          cards={props.cards}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
