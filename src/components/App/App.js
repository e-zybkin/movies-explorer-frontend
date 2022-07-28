import './App.css';
import React from 'react';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import * as auth from '../../utils/auth'
import { windowConfig } from '../../utils/constants';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'


function App() {
  document.documentElement.lang = 'ru'

  const [currentUser, setCurrentUser] = React.useState({});

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([])

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [moviesAtPage, setMoviesAtPage] = React.useState(12);
  const [addMovies, setAddMovies] = React.useState(3);

  const [isLoading, setIsLoading] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [name, setName] = React.useState('');

  const [afterEditMessage, setAfterEditMessage] = React.useState("");
  const [isAfterEditError, setIsAfterEditError] = React.useState(false);

  const [isErrorOnLogin, setIsErrorOnLogin] = React.useState(false);
  const [isErrorOnRegister,setIsErrorOnRegister] = React.useState(false);

  const navigate = useNavigate();

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
	  mainApi.getSavedMovies()
      .then(result => {
        setSavedMovies(result.data)
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
          /*setEmail(res.data.email)*/
          setLoggedIn(true)
          navigate('/movies');
        }
      })
      .catch(error => {
        console.log('ОШИБКА: ', error)
      })
    }
  }, [])

  //неполная часть кода для отображения верного количества карточек, в зависимости от размера
  React.useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth)
    };
  }, []);

  React.useEffect(() => {
    setMoviesWindow();
  });

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

  //неполная поисковая система
  function handleSearchMovies(data) {
    setIsLoading(true)

    moviesApi.getMovies()
      .then(result => {
        localStorage.setItem('research', data.research)
        if (localStorage.getItem('allMovies')) {
          const finalMoviesList = filterMovies(
            JSON.parse(localStorage.getItem('allMovies')),
            data.research,
            data.checkBoxState
          )
          console.log(finalMoviesList) //убрать
          localStorage.setItem('filteredMovies', JSON.stringify(finalMoviesList))
          setFilteredMovies(finalMoviesList) //переделать
          console.log(filteredMovies) //убрать и разобраться, почему после первого поиска filteredmovies пустой
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

  //функционал регистрации и авторизации

	function handleLogin(formData) {
		auth.authorize(formData.mail, formData.password)
		.then((data) => {
			localStorage.setItem('jwt', data.token);
			setLoggedIn(true);
			/*
      Схожим образом организовать передачу имени пользователя на страничку ЛК
      setEmail(formData.mail);*/
			navigate('/movies');
		})
		.catch((err) => {
			console.log('ОШИБКА: ', err);
			/*
      енто для попапа с сообщением об ошибке
      setIsAccessSuccess(false);
			setIsInfoToolPopupOpen(true)*/
		})
	}

	function handleRegister(formData) {
		auth.register(formData.name, formData.mail, formData.password)
		.then((res) => {
			/*
      а енто для попапа с сообщением об удачной регистрации
      setIsAccessSuccess(true);*/
      handleLogin(formData);
		})
		.catch((err) => {
			console.log('ОШИБКА: ', err);
			/*setIsAccessSuccess(false);
    */		})
		.finally(() => {
			/*setIsInfoToolPopupOpen(true);*/
		})
	}

	function signOut() {
		localStorage.removeItem('jwt');
		setLoggedIn(false);
		setCurrentUser({});
		/*setEmail('');
		setCards([]);*/
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
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>

            <Route
              path='/'
              element={
                <Main />
              }
            />

            <Route
              path='/movies'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies
                    cards={filteredMovies}
                    onSearch={handleSearchMovies}
                    isLoading={isLoading}
                    filterMovies={filterMovies}
                    moviesAtPage={moviesAtPage}
                    addMovies={addMovies}
                    handleMoreMoviesClick={handleMoreMoviesClick}
                  />
                </ProtectedRoute>
              }
            />

            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies
                    cards={[]}
                    onSearch={''}
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
                <Login
                  handleLogin={handleLogin}
                />
              }
            />

            <Route
              path='/signup'
              element={
                <Register
                  handleRegister={handleRegister}
                />
              }
            />

            <Route
              path='*'
              element={
                <PageNotFound />
              }
            />

            {/*проверить*/}
            <Route
              path='/'
              element={loggedIn ? <Navigate to="/movies" /> : <Navigate to="/" />}
            />
          </Routes>
        </CurrentUserContext.Provider>

      </div>
    </div>
  );
}

export default App;
