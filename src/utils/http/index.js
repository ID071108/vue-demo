// 在http.js中引入axios
import axios from "axios"; // 引入axios
import QS from "qs"; // 引入qs模块，用来序列化post类型的数据，后面会提到
// vant的Message提示框组件，大家可根据自己的ui组件更改。
import { Message } from "ant-design-vue";
import {
  interceptorsRequest,
  interceptorsRequestErr,
  interceptorsResponse,
  interceptorsResponseErr
} from "./interceptors";

// 环境的切换
if (import.meta.env.MODE == "development") {
  axios.defaults.baseURL = "https://www.dev.com";
} else if (import.meta.env.MODE == "debug") {
  axios.defaults.baseURL = "https://www.test.com";
} else if (import.meta.env.MODE == "production") {
  axios.defaults.baseURL = "https://www.prod.com";
}
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
axios.interceptors.request.use(interceptorsRequest, interceptorsRequestErr);
// 响应拦截器
axios.interceptors.response.use(interceptorsResponse, interceptorsResponseErr);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
