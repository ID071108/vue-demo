<!--
 * @Author: shuwang_wu
 * @Date: 2021-05-13 09:55:35
 * @LastEditTime: 2021-05-14 14:40:39
 * @LastEditors: shuwang_wu
 * @Description: app entry
 * @FilePath: \vue2.0\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue')
  }
})
export default class App extends Vue {
  msg: string = 'vue'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
