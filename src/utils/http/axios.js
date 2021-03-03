/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-03 11:43:45
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 11:44:11
 * @reason       :
 * @FilePath     : \vite-demo\src\utils\http\axios.js
 */
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          break;
        case 401:
          break;
        default:
          return Promise.reject(error);
      }
    }
  }
);
