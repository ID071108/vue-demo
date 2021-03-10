/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-03 18:38:51
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 19:58:07
 * @reason       : set global properties
 * @FilePath     : \vite-demo\src\utils\global-properties.js
 */
import momont from "moment";
import { message } from "ant-design-vue";
import { message } from "/@/utils/http";

export function setGlobalProperties(app) {
  // configure message component
  app.config.globalProperties.$message = message;
  // configure momont
  app.config.globalProperties.$momont = momont;
}
