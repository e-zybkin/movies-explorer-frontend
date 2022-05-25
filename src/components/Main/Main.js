import React from "react";
import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject';

function Main(props) {
  return(
    <>
      <Header />
      <main>
        <Promo />
        <AboutProject />
      </main>
    </>
  );
}

export default Main;
