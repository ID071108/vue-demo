/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-26 10:07:30
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-02-26 11:41:30
 * @reason       :
 * @FilePath     : \vite-demo\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
// import { createGuard } from "./guard/";

// app router
const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export function resetRouter() {
  const resetWhiteNameList = ["login", REDIRECT_NAME];
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !resetWhiteNameList.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export function setupRouter(app) {
  app.use(router);
//   createGuard(router);
}

export default router