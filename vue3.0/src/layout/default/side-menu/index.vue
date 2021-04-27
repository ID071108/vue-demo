<!--
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-25 16:45:22
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 17:37:46
 * @reason       : 
 * @FilePath     : \vite-demo\src\layout\default\side-menu\index.vue
-->
<template>
  <div class="menu-wrap">
    <a-menu
      theme="dark"
      mode="inline"
      v-model:selectedKeys="selectedKeys"
      @click="toggle"
    >
      <div v-for="route in routes" :key="route.path">
        <a-sub-menu
          :key="route.path"
          v-if="route.children && route.children.length > 0"
        >
          <template #title>
            <span>
              <!-- <user-outlined /> -->
              <span>{{ route.meta.title }}</span>
            </span>
          </template>
          <a-menu-item
            v-for="childItem in route.children"
            :key="childItem.path"
            >{{ childItem.meta.title }}</a-menu-item
          >
        </a-sub-menu>
        <a-menu-item :key="route.path" v-else>
          <!-- <pie-chart-outlined /> -->
          <span>{{ route.meta.title }}</span>
        </a-menu-item>
      </div>
    </a-menu>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import routes from "/@router/routes";
import { ref, toRaw, watch } from "vue";
const selectedKeys = ref(["1"]);
// 获取路由实例
const router = useRouter();
const route = useRoute();
const toggle = (value) => {
  router.push({
    path: value.key
  });
};
watch(
  () => route,
  (to) => {
    selectedKeys.value = [to.path];
  },
  {
    immediate: true,
    deep: true
  }
);
</script>

<style lang="less" scoped>
.menu-wrap {
  height: 100%;
}
</style>