import './App.css';
import React from 'react';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import * as auth from '../../utils/auth'
import { windowConfig } from '../../utils/constants';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'


function App() {
  document.documentElement.lang = 'ru'

  const location = useLocation();

  const [currentUser, setCurrentUser] = React.useState({});

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [moviesAtPage, setMoviesAtPage] = React.useState(12);
  const [addMovies, setAddMovies] = React.useState(3);

  const [isLoading, setIsLoading] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [afterEditMessage, setAfterEditMessage] = React.useState("");
  const [isAfterEditError, setIsAfterEditError] = React.useState(false);

  const [afterSubMessage, setAfterSubMessage] = React.useState('');
  const [isAfterSubError, setIsAfterSubError] = React.useState(false)

  const [isMoviesNotFound, setIsMoviesNotFound] = React.useState(false);
  const [isMoviesApiErrorShown, setIsMoviesApiErrorShown] = React.useState(false);

  const [isSavedMoviesNotFound, setIsSavedMoviesNotFound] = React.useState(false);
  const [isMainApiErrorShown, setIsMainApiErrorShown] = React.useState(false);

  const navigate = useNavigate();

  /*Эффект для задания базового для
    определённой ширины экрана кол-ва карточек
    при переходе со страницы movies на saved-movies
  */
  React.useEffect(() => {
    setMoviesWindow();
  }, [location.pathname])

  //useEffect'ы для получения пользовательских данных и проверки наличия токена
  React.useEffect(() => {
    if (!loggedIn) {
      return;
    }
    mainApi.getUserData()
      .then(result => {
        setCurrentUser(result.data);
      })
      .catch(error => {
        console.log('ОШИБКА: ', error)
      })
  }, [loggedIn])

  React.useEffect(() => {
    if(localStorage.getItem('jwt')){
      const jwt = localStorage.getItem('jwt');
      auth.getContent(jwt)
      .then((res) => {
        if(res){
          setLoggedIn(true)
        }
      })
      .catch(error => {
        console.log('ОШИБКА: ', error)
      })
    }
  }, [])

  //функциональность для отображения верного количества карточек, в зависимости от размера
  React.useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth)
    };
  }, []);

  React.useEffect(() => {
    setMoviesWindow();
  }, [windowWidth]);

  function updateWindowWidth() {
    setWindowWidth(window.innerWidth);
  }

  function setMoviesWindow() {
    if (windowWidth > 768) {
      setMoviesAtPage(windowConfig.movies_at_computer_screen);
      setAddMovies(windowConfig.add_movies_to_computer_screen);
    } else if (windowWidth > 480) {
      setMoviesAtPage(windowConfig.movies_at_tablet_screen);
      setAddMovies(windowConfig.add_movies_to_tablet_screen);
    } else {
      setMoviesAtPage(windowConfig.movies_at_phone_screen);
      setAddMovies(windowConfig.add_movies_to_phone_screen);
    }
  }

  function handleMoreMoviesClick() {
    setMoviesAtPage(moviesAtPage + addMovies);
  }

  //поисковая система и система фильтрации

  function handleSearchMovies(data) {
    setMoviesWindow();
    setFilteredMovies([])
    setIsLoading(true)
    setIsMoviesApiErrorShown(false)
    setIsMoviesNotFound(false)
    getAllSavedMovies();
      moviesApi.getMovies()
        .then(result => {
          localStorage.setItem('researchAllMovies', JSON.stringify(data.research))
          if (localStorage.getItem('allMovies')) {
            const finalMoviesList = filterMovies(
              JSON.parse(localStorage.getItem('allMovies')),
              data.research,
              data.checkBoxState
            );
            updStatesAndLocalStorage(data, finalMoviesList);
          } else {
            localStorage.setItem('allMovies', JSON.stringify(result));
            const finalMoviesList = filterMovies(
              JSON.parse(localStorage.getItem('allMovies')),
              data.research,
              data.checkBoxState
            );
            updStatesAndLocalStorage(data, finalMoviesList);
          }
        })
        .catch(error => {
          console.log('ОШИБКА: ', error);
          setIsMoviesApiErrorShown(true);
        })
        .finally(() => {
          setIsLoading(false)
        })
  }

  function handleSearchSavedMovies(data) {
    setMoviesWindow();
    setFilteredMovies([])
    setIsLoading(true)
    setIsMainApiErrorShown(false)
    setIsSavedMoviesNotFound(false)
    if(JSON.parse(localStorage.getItem('savedMovies')).length > 0) {
      const finalSavedMovieList = filterMovies(
        JSON.parse(localStorage.getItem('savedMovies')),
        data.research,
        data.checkBoxState
      )
      localStorage.setItem('savedFilteredMovies', JSON.stringify(finalSavedMovieList))
      if (finalSavedMovieList.length > 0) {
        setSavedMovies(finalSavedMovieList)
      } else {
        setIsSavedMoviesNotFound(true)
        setSavedMovies(finalSavedMovieList)
      }
      setIsLoading(false)
    } else {
      setIsSavedMoviesNotFound(true)
      setIsLoading(false)
    }
  }

  function getAllSavedMovies () {
    mainApi.getSavedMovies()
      .then(result => {
        setSavedMovies(result.data)
        localStorage.setItem('savedMovies', JSON.stringify(result.data))
      })
      .catch(error => {
        console.log('ОШИБКА: ', error)
        setIsMainApiErrorShown(true);
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

  function updStatesAndLocalStorage(data, finalMoviesList) {
    localStorage.setItem('filteredMovies', JSON.stringify(finalMoviesList))
    localStorage.setItem('checkBoxStatus', JSON.stringify(data.checkBoxState))

    if (finalMoviesList.length > 0) {
      setFilteredMovies(finalMoviesList)
    } else {
      setIsMoviesNotFound(true)
      setFilteredMovies(finalMoviesList)
    }
  }

  //функционал регистрации, авторизации и выхода

	function handleLogin(formData) {
		auth.authorize(formData.email, formData.password)
		.then((data) => {
			localStorage.setItem('jwt', data.token);
			setLoggedIn(true);
			navigate('/movies');
      setAfterSubMessage('')
		})
		.catch((err) => {
			console.log('ОШИБКА: ', err);
      setAfterSubMessage('При входе произошла ошибка, попробуйте снова.');
      setIsAfterSubError(true);
		})
	}

	function handleRegister(formData) {
		auth.register(formData.name, formData.email, formData.password)
		.then((res) => {
      handleLogin(formData);
		})
		.catch((err) => {
			console.log('ОШИБКА: ', err);
      setAfterSubMessage('При регистрации произошла ошибка, попробуйте снова.');
      setIsAfterSubError(true);
    })
	}

	function signOut() {
		localStorage.clear();
		setLoggedIn(false);
		setCurrentUser({});
    setFilteredMovies([]);
		navigate('/');
	}

  //функция редактирования пользовательских данных

  function handleUpdateUser(formData) {
    mainApi.setUserData(formData)
      .then(result => {
        setAfterEditMessage('Ваши данные успешно обновлены!');
        setIsAfterEditError(false);
        setCurrentUser(result.data);
      })
      .catch(error => {
        setAfterEditMessage('При обновлении ваших данных произошла ошибка, попробуйте снова.');
        setIsAfterEditError(true);
        console.log(error);
      })
  }

  //функционал лайков

  function handleLikeCard (country, director, duration, year, description, image,
    trailerLink,thumbnail, movieId, nameRU, nameEN) {

    mainApi.saveMovie(country, director, duration, year, description,
      image, trailerLink, thumbnail, movieId, nameRU, nameEN)
      .then((result) => {
        setSavedMovies([...savedMovies, result.data])
        localStorage.setItem('savedMovies', JSON.stringify([...savedMovies, result.data]));
      })
      .catch(error => {
        console.log('ОШИБКА: ', error);
      })
  }

  function handleDeleteButtonClick (data) {
    mainApi.deleteMovie(data)
    .then((result) => {
      setSavedMovies(savedMovies.filter((movie) => !(movie._id === result.data._id)));
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies.filter((movie) => !(movie._id === result.data._id))));
    })
    .catch(error => {
      console.log('ОШИБКА: ', error);
    })
  }

  return (
    <div className="page">
      <div className="wrapper">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>

            <Route
              path='/'
              element={
                <Main
                  loggedIn={loggedIn}
                />
              }
            />

            <Route
              path='/movies'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies
                    cards={filteredMovies}
                    setCards={setFilteredMovies}
                    onSearch={handleSearchMovies}
                    isLoading={isLoading}
                    filterMovies={filterMovies}
                    moviesAtPage={moviesAtPage}
                    addMovies={addMovies}
                    handleMoreMoviesClick={handleMoreMoviesClick}
                    isMoviesNotFound={isMoviesNotFound}
                    isMoviesApiErrorShown={isMoviesApiErrorShown}
                    onCardLike={handleLikeCard}
                    onDeleteButton={handleDeleteButtonClick}
                    getAllSavedMovies={getAllSavedMovies}
                    loggedIn={loggedIn}
                  />
                </ProtectedRoute>
              }
            />

            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies
                    cards={savedMovies}
                    onSearch={handleSearchSavedMovies}
                    getAllSavedMovies={getAllSavedMovies}
                    onDeleteButton={handleDeleteButtonClick}
                    isLoading={isLoading}
                    moviesAtPage={moviesAtPage}
                    addMovies={addMovies}
                    handleMoreMoviesClick={handleMoreMoviesClick}
                    isMoviesNotFound={isSavedMoviesNotFound}
                    isMoviesApiErrorShown={isMainApiErrorShown}
                    setIsMoviesNotFound={setIsSavedMoviesNotFound}
                    loggedIn={loggedIn}
                  />
                </ProtectedRoute>
              }
            />

            <Route
              path='/profile'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Profile
                    signOut={signOut}
                    onUpdate={handleUpdateUser}
                    isAfterEditError={isAfterEditError}
                    afterEditMessage={afterEditMessage}
                    setAfterEditMessage={setAfterEditMessage}
                  />
                </ProtectedRoute>
              }
            />

            <Route
              path='/signin'
              element={
                loggedIn ? <Navigate to="/movies" /> :
                <Login
                  handleLogin={handleLogin}
                  afterSubMessage={afterSubMessage}
                  isAfterSubError={isAfterSubError}
                  setAfterSubMessage={setAfterSubMessage}
                />
              }
            />

            <Route
              path='/signup'
              element={
                loggedIn ? <Navigate to="/movies" /> :
                <Register
                  handleRegister={handleRegister}
                  afterSubMessage={afterSubMessage}
                  isAfterSubError={isAfterSubError}
                  setAfterSubMessage={setAfterSubMessage}
                />
              }
            />

            <Route
              path='*'
              element={
                <PageNotFound />
              }
            />
          </Routes>
        </CurrentUserContext.Provider>

      </div>
    </div>
  );
}

export default App;
