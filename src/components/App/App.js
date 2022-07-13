import './App.css';
import React from 'react';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import { cards, savedCards } from '../../utils/constants';


function App() {

  return (
    <div className="page">
      <div className="wrapper">
        <Routes>

          <Route
            path='/'
            element={
              <Main

              />
            }
          />

          <Route
            path='/movies'
            element={
              <Movies
                cards={cards}
              />
            }
          />

          <Route
            path='/saved-movies'
            element={
              <SavedMovies
                cards={savedCards}
              />
            }
          />

          <Route
            path='/profile'
            element={
              <Profile
                name="Евгений"
              />
            }
          />

          <Route
            path='/signin'
            element={
              <Login

              />
            }
          />

          <Route
            path='/signup'
            element={
              <Register

              />
            }
          />

          <Route
            path='*'
            element={
              <PageNotFound

              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
