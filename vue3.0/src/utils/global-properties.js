/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-03 18:38:51
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-04-23 11:21:12
 * @reason       : set global properties
 * @FilePath     : \vite-demo\src\utils\global-properties.js
 */
import momont from "moment";
import { message } from "ant-design-vue";
import { get, post, put, del, uploader } from "/@/http";

export function setGlobalProperties(app) {
  // configure message component
  app.config.globalProperties.$message = message;
  // configure momont
  app.config.globalProperties.$momont = momont;
  // config req
  app.config.globalProperties.$get = get;
  app.config.globalProperties.$post = post;
  app.config.globalProperties.$put = put;
  app.config.globalProperties.$del = del;
  app.config.globalProperties.$uploader = uploader;
}
