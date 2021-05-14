/*
 * @Author: shuwang_wu
 * @Date: 2021-05-13 09:55:35
 * @LastEditTime: 2021-05-14 14:45:05
 * @LastEditors: shuwang_wu
 * @Description: app router
 * @FilePath: \vue2.0\src\router\index.ts
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
