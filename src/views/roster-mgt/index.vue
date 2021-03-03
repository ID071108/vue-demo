<!--
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-02 16:06:02
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 13:35:38
 * @reason       : 
 * @FilePath     : \vite-demo\src\views\roster-mgt\index.vue
-->
<template>
  <div class="roster-mgt">排班管理</div>
  <a-button @click="count++">{{ count }}</a-button>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<style lang="less" scoped>
.roster-mgt {
}
</style>