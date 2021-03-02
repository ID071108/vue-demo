/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-02 16:43:34
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-02 16:57:17
 * @reason       :
 * @FilePath     : \vite-demo\src\store\index.js
 */
import { createStore } from "vuex";
import { isDevMode } from "/@/utils/env";

const store = createStore({
  strict: isDevMode(),
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});

export function setupStore(app) {
  app.use(store);
}

export default store;
