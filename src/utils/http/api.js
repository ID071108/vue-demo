/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-03 11:43:05
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 11:43:06
 * @reason       :
 * @FilePath     : \vite-demo\src\utils\http\api.js
 */
import Goods from "./api/goods.js";

export default {
  // 首页
  Index: {
    index: "/index/index"
  },

  // 个人中心
  Home: {
    UserInfo: "/user/info"
  },

  // 当然也可以用文件方式进行管理
  Goods: Goods
};
