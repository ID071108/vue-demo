<!--
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-25 16:45:22
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 16:36:57
 * @reason       : 
 * @FilePath     : \vite-demo\src\layout\default\content\index.vue
-->
<template>
  <div class="content"><slot></slot></div>
</template>
<script>
export default {
  name: "Content"
};
</script>

<style  scoped>
.content {
  height: calc(100% - 38px);
  padding: 16px;
  border-radius: 6px;
  background-color: #fff;
}
.breadcrumb-wrap {
  display: flex;
  align-items: center;
  height: 32px;
  background-color: aquamarine;
}
.main {
  background-color: #333;
}
</style>