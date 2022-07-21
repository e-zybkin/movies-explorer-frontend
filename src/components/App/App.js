import './App.css';
import React from 'react';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import * as auth from '../../utils/auth'


function App() {
  document.documentElement.lang = 'ru'

  const [currentUser, setCurrentuser] = React.useState({});

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([])

  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();
  /*
  React.useEffect(() => {
    if(localStorage.getItem('jwt')){
      const jwt = localStorage.getItem('jwt');
      auth.getContent(jwt)
      .then((res) => {
        if(res){
          setLoggedIn(true)
          navigate('/movies');
        }
      })
      .catch(error => {
        console.log('ОШИБКА: ', error)
      })
    }
  }, [])
  */

  function handleSearchMovies(data) {
    setIsLoading(true)

    moviesApi.getMovies()
      .then(result => {
        localStorage.setItem('allMovies', JSON.stringify(result));
      })
      .catch(error => {
        console.log('ОШИБКА: ', error);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

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
                cards={[]}
                onSearch={handleSearchMovies}
                isLoading={isLoading}
              />
            }
          />

          <Route
            path='/saved-movies'
            element={
              <SavedMovies
                cards={[]}
                onSearch={''}
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
