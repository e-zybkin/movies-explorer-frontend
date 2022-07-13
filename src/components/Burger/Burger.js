import React, { useState } from "react";
import './Burger.css'
import NavTab from "../NavTab/NavTab";

function Burger(props) {
  return(
    <>
      <div
        className={`burger ${props.isOpen ? 'burger_opened' : 'burger_closed'}`}
        onClick={props.onBurgerClick}
      >
        <div className="burger__part" />
      </div>
      <NavTab isOpen = {props.isOpen}/>
    </>

  )
}

export default Burger;
