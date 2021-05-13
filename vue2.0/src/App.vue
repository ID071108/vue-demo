<template>
  <div id="app">
    <!-- <HelloWorld /> -->
    <router-view />
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import Vue from "vue";
// import Component from "vue-class-component";
// import HelloWorld from "@/components/HelloWorld.vue";

// @Component({ HelloWorld })
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
