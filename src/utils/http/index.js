import axios from "axios";
// 引入qs模块，用来序列化post类型的数据
import QS from "qs";
// 引入请求拦截、响应拦截
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
// 超时时间
axios.defaults.timeout = 10000;

// post请求头
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

/**
 * put请求
 * @param url 接口路由
 * @param data 接口参数
 * @param auth 是否需要带登录信息
 * @returns {AxiosPromise<any>}
 */
export function put(url, data, auth = false) {
  if (auth) {
    return axios.put(url, data, {
      headers: {
        Authorization: "Your back-end user authenticates information"
      }
    });
  } else {
    return axios.put(url, data);
  }
}

/**
 * 删除
 * @param url 接口路由
 * @param auth 是否需要带登录信息
 * @returns {AxiosPromise}
 */
export function del(url, auth = false) {
  if (auth) {
    return axios.delete(url, {
      headers: {
        Authorization: "Your back-end user authenticates information"
      }
    });
  } else {
    return axios.delete(url);
  }
}

/**
 * 上传文件
 * @param url 接口路由
 * @param file 接口文件
 * @param auth 是否需要带登录信息
 */
export function uploader(url, file, auth = false) {
  let param = new FormData();
  param.append("file", file);
  if (auth) {
    return axios.post(url, param, {
      headers: {
        Authorization: "Your back-end user authenticates information"
      }
    });
  } else {
    return axios.post(url, param);
  }
}
