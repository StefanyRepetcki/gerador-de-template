import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_URL,
  headers: { 'Access-Control-Allow-Origin': window.location.origin },
  withCredentials: true,
});

export { api };
