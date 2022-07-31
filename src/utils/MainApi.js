class MainApi {
  constructor({address}) {
    this.address = address;
  }

  getToken = () => {
    return `Bearer ${localStorage.getItem('jwt')}`;
  }

  _getResponseData(result) {
    if (!result.ok) {
      return Promise.reject(`Ошибка: ${result.status}`);
    }
    return result.json();
  }

  getUserData() {
    return fetch(`${this.address}/users/me`, {
      headers: {
        authorization: this.getToken(),
      }
    })
    .then(result => this._getResponseData(result))
  }

  setUserData(data) {
    return fetch(`${this.address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this.getToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
    .then(result => this._getResponseData(result))
  }

  getSavedMovies() {
    return fetch(`${this.address}/movies`, {
      headers: {
        authorization: this.getToken(),
      },
    })
    .then(result => this._getResponseData(result))
  }

  saveMovie(country, director, duration, year, description, image, trailerLink,
    thumbnail, movieId, nameRU, nameEN) {
    return fetch(`${this.address}/movies`, {
      method: 'POST',
      headers: {
        authorization: this.getToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        thumbnail: thumbnail,
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN
      })
    })
    .then(result => this._getResponseData(result))
  }

  deleteMovie(data) {
    return fetch(`${this.address}/movies/${data._id}`, {
      method: 'DELETE',
      headers: {
        authorization: this.getToken(),
      }
    })
    .then(result => this._getResponseData(result))
  }
}

const mainApi = new MainApi({
  address: 'http://localhost:3001'
})

export default mainApi;

/*address: 'https://api.my-movies.nomoredomains.work'*/
