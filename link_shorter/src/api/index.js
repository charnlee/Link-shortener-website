import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const shortenUrl = (url) => {
  return api.post('/shorten', { url });
};
