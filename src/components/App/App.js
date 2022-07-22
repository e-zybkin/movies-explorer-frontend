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
        if (localStorage.getItem('allMovies')) {
          const finalMoviesList = filterMovies(
            JSON.parse(localStorage.getItem('allMovies')),
            data.research,
            data.checkBoxState
          )
          console.log(finalMoviesList) //убрать
          localStorage.setItem('filteredMovies', JSON.stringify(finalMoviesList))
          setFilteredMovies(finalMoviesList) //переделать
          console.log(filteredMovies) //убрать
        } else {
          localStorage.setItem('allMovies', JSON.stringify(result));
          const finalMoviesList = filterMovies(
            JSON.parse(localStorage.getItem('allMovies')),
            data.research,
            data.checkBoxState
          )
          console.log(finalMoviesList) //убрать
          localStorage.setItem('filteredMovies', JSON.stringify(finalMoviesList))
          setFilteredMovies(finalMoviesList) //переделать
          console.log(filteredMovies) //убрать
        }
      })
      .catch(error => {
        console.log('ОШИБКА: ', error);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function filterMovies(movies, research, checkBoxState) {
    return (
      movies.filter(movie => {
        if (checkBoxState) {
          return (
            movie.duration <= 40 && movie.nameRU.toLowerCase().includes(research.toLowerCase())
          );
        } else {
          return (
            movie.nameRU.toLowerCase().includes(research.toLowerCase())
          );
        }
      })
    );
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
                cards={filteredMovies}
                onSearch={handleSearchMovies}
                isLoading={isLoading}
                filterMovies={filterMovies}
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
