export const BASE_URL = 'http://localhost:3001' //'https://api.my-movies.nomoredomains.work'

const HEADERS = {
  'Content-Type': 'application/json'
}

const getJson = (response) => {
  if (response.ok){
    return response.json();
  }
  throw new Error({status: response.status});
}

export const register = ( name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ name, email, password })
  })
  .then(getJson)
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ email, password })
  })
  .then(getJson)
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(getJson)
}
