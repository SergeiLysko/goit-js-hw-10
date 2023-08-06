import axios from 'axios';

const API_KEY =
  'live_49X1YynznB8RREo5I0oIUATeeGJIrdi5oHhswFVvjqJO9TYj8nJwlhReCunuKJsA';
axios.defaults.headers.common['x-api-key'] = API_KEY;
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(resp => resp)
    .catch(err => err);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(resp => resp)
    .catch(err => err);
}
