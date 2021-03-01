<template>
  <div id="app">
    <default-view />
  </div>
</template>

<script>
import DefaultView from "./layout/default";
export default {
  components: {
    DefaultView
  }
};
</script>

<style>
#app {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  /* flex-direction: column; */
  height: calc(100% - 64px);
}
.content-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>