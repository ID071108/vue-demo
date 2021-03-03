/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-03 16:47:43
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 17:40:27
 * @reason       :
 * @FilePath     : \vite-demo\src\router\routes\index.js
 */
export default [
  {
    name: "Home",
    path: "/",
    meta: {
      title: "首页"
    },
    component: () => import("/@views/home/index.vue")
  },
  {
    name: "RosterMgt",
    path: "/roster-mgt",
    meta: {
      title: "排版管理"
    },
    component: () => import("/@views/roster-mgt/index.vue"),
    children: [
      {
        name: "RosterMgt1",
        path: "/roster-mgt1",
        meta: {
          title: "RosterMgt1"
        },
        component: () => import("/@views/roster-mgt/index.vue")
      },
      {
        name: "RosterMgt2",
        path: "/roster-mgt2",
        meta: {
          title: "RosterMgt2"
        },
        component: () => import("/@views/roster-mgt/index.vue")
      }
    ]
  }
];
