<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <default-view />
    </a-config-provider>
  </div>
</template>

<script setup>
import zhCN from "ant-design-vue/es/locale/zh_CN";
import DefaultView from "./layout/default/index.vue";
import { ref } from "vue";
const locale = ref(zhCN);
</script>

<style>
#app {
  overflow: hidden;
  min-width: 1366px;
  width: 100%;
  height: 100%;
}
</style>