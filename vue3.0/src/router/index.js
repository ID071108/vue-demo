/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-26 10:07:30
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 16:48:32
 * @reason       : config router
 * @FilePath     : \vite-demo\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export function setupRouter(app) {
  app.use(router);
}

export default router;
