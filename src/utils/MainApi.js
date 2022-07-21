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

  saveMovie(data) {
    return fetch(`${this.address}/movies`, {
      method: 'POST',
      headers: {
        authorization: this.getToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailer: data.trailer,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
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
