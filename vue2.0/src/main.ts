/*
 * @Author: shuwang_wu
 * @Date: 2021-05-13 09:55:35
 * @LastEditTime: 2021-05-14 15:51:48
 * @LastEditors: shuwang_wu
 * @Description: main.ts
 * @FilePath: \vue2.0\src\main.ts
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'
// import { RegisterComponents } from '@/utils/register-components'

Vue.config.productionTip = false

// RegisterComponents(Vue)

// tslint:disable-next-line
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
