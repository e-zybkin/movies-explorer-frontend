import React from "react";
import './PageNotFound.css';
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return(
    <main className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__caption">Страница не найдена</p>
      <button
        className="notFound__button buttons"
        onClick={() => navigate(-1)}
      >Назад</button>
    </main>
  );
}

export default PageNotFound;
