<!--
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-02 16:06:02
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 18:58:22
 * @reason       : 
 * @FilePath     : \vite-demo\src\views\roster-mgt\index.vue
-->
<template>
  <div class="roster-mgt">排班管理</div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const inst = getCurrentInstance();
const { ctx } = inst;
ctx.$message.info({
  content: "测试"
});
</script>