import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function Movies(props) {
  return(
    <>
      <Header />
      <main>
        <SearchForm />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
