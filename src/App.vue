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
  },
  setup() {
    // let { proxy } = getCurrentInstance();

    // let data = reactive({
    //   name: "hello"
    // });

    // onMounted(() => {
    //   console.log(proxy.$axios);
    // });

    // return { data, proxy };
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