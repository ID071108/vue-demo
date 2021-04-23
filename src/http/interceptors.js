/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-03 11:45:46
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 11:54:11
 * @reason       :
 * @FilePath     : \vite-demo\src\utils\http\interceptors.js
 */
export function interceptorsRequest(config) {
  //   const token = store.state.token;
  //   token && (config.headers.Authorization = token);
  return config;
}
export function interceptorsRequestErr(error) {
  return Promise.error(error);
}

export function interceptorsResponse(response) {
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  // 否则的话抛出错误
  if (response.status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}
export function interceptorsResponseErr(error) {
  if (error.response.status) {
    switch (error.response.status) {
      // 401: 未登录
      case 401:
        router.replace({
          path: "/login",
          query: {
            redirect: router.currentRoute.fullPath
          }
        });
        break;

      // 403 token过期
      case 403:
        Message({
          message: "登录过期，请重新登录",
          duration: 1000
        });
        // 清除token
        localStorage.removeItem("token");
        store.commit("loginSuccess", null);
        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        setTimeout(() => {
          router.replace({
            path: "/login",
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
        }, 1000);
        break;

      // 404请求不存在
      case 404:
        Message({
          message: "网络请求不存在",
          duration: 1500
        });
        break;
      // 其他错误，直接抛出错误提示
      default:
        Message({
          message: error.response.data.message,
          duration: 1500
        });
    }
    return Promise.reject(error.response);
  }
}
