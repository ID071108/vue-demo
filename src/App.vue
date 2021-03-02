<template>
  <div id="app">
    <default-view />
  </div>
</template>

<script>
import DefaultView from "./layout/default/index.vue";
export default {
  components: {
    DefaultView
  }
};
</script>

<style>
#app {
  overflow: hidden;
  min-width: 1366px;
  width: 100%;
  height: 100%;
}
</style>