import axios from 'axios';

const baseURL = 'https://localhost:7443';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json; charset=utf8',
    'Accept-Language': 'ko',
  },
});

axiosInstance.defaults.timeout = 2500;

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  response => {
    const res = response;
    return res;
  },

  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
