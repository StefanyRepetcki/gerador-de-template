import axios from 'axios';

const defaultAxios = axios;

const defaultWithCredentials = axios.create({
  withCredentials: true,
});

const users = axios.create({
  baseURL: process.env.VUE_APP_URL,
  withCredentials: true,
});

export {
  defaultWithCredentials,
  defaultAxios,
  users,
};
