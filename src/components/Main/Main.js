import React from "react";
import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject';
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function Main(props) {
  return(
    <>
      <Header
        loggedIn={props.loggedIn}
      />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default Main;
