import './App.css';
import React from 'react';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';


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

              />
            }
          />

          {/*<Route
            path='/saved-movies'
            element={
              <SavedMovies

              />
            }
          />

          <Route
            path='/profile'
            element={
              <Profile

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
          />*/}

        </Routes>
      </div>
    </div>
  );
}

export default App;
