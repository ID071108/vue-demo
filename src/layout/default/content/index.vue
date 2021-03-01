<!--
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-25 16:45:22
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-02-26 15:07:20
 * @reason       : 
 * @FilePath     : \vite-demo\src\layout\default\content\index.vue
-->
<template>
  <div class="content">
    <div class="breadcrumb-wrap">
      <a-button>切换</a-button>
      <a-breadcrumb>
        <a-breadcrumb-item href="">
          <home-outlined />
        </a-breadcrumb-item>
        <a-breadcrumb-item href="">
          <user-outlined />
          <span>Application List</span>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Application</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="main">main</div>
  </div>
</template>
<script>
export default {
  name: "Content"
};
</script>

<style  scoped>
.content {
  height: 100%;
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