import React from "react";
import { Link } from "react-scroll";
import './Promo.css';
import planet from '../../images/web-planet.png';

function Promo(props) {
  return(
    <section className="promo">
      <div className="promo__box">
        <h1 className="promo__title">
          Учебный проект студента факультета <br />Веб-разработки.
        </h1>
        <p className="promo__text">
          Листайте ниже, чтобы узнать
          больше про этот проект и его создателя.
        </p>
        <Link
          className="promo__link buttons"
          to="aboutProject"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Узнать больше</Link>
        </div>
        <img
          className="promo__pic"
          src={planet}
          alt="Земля веб-разработчиков"
        />
    </section>
  )
}

export default Promo;
