class MoviesApi {
  constructor({address}) {
    this.address = address;
  }

  _getResponseData(result) {
    if (!result.ok) {
      return Promise.reject(`Ошибка: ${result.status}`);
    }
    return result.json();
  }

  getMovies() {
    return fetch(this.address)
    .then(result => this._getResponseData(result))
  }
}

const moviesApi = new MoviesApi({
  address: 'https://api.nomoreparties.co/beatfilm-movies'
})

export default moviesApi;
