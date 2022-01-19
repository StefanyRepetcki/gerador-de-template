import { api } from './index';

const checkAutorization = restService => {
  restService.interceptors.request.use(
    config => {
      config.credentials = true;
      return config;
    },
    error => Promise.reject(error),
  );

  restService.interceptors.response.use(undefined, (err: any) => {
    const res = err.response;
    if (res && res.status === 401) {
      window.location.href = process.env.VUE_APP_URL;
    }
    return Promise.reject(err.response);
  });
};

checkAutorization(api);
