<!--
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-03 14:18:56
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 17:58:32
 * @reason       : 
 * @FilePath     : \vite-demo\src\layout\default\breadcrumb\index.vue
-->
<template>
  <a-breadcrumb separator=">">
    <a-breadcrumb-item v-for="route in routes" :key="route.name">
      <router-link :to="route.path">{{ route.meta.title }}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";
// 获取匹配的路由地址
let routes = ref([]);
const route = useRoute();
const getRoutes = () => {
  routes.value = route.matched;
};
// 路由监听
const stopWatch = watch(
  () => route,
  () => {
    routes.value = route.matched;
  },
  {
    immediate: true,
    deep: true
  }
);
// 组件加载完成之前
onBeforeMount(getRoutes);
</script>