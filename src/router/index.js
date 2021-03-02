/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-26 10:07:30
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-02 17:21:45
 * @reason       : config router
 * @FilePath     : \vite-demo\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("/@views/home/index.vue")
    },
    {
      name: "RosterMgt",
      path: "/roster-mgt",
      component: () => import("/@views/roster-mgt/index.vue")
    }
  ],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export function setupRouter(app) {
  app.use(router);
}

export default router;
