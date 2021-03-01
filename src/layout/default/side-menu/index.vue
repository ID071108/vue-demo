<!--
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-25 16:45:22
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-02-26 15:05:39
 * @reason       : 
 * @FilePath     : \vite-demo\src\layout\default\side-menu\index.vue
-->
<template>
  <div class="menu-wrap">
    <a-menu
      mode="inline"
      theme="dark"
      style="width: 200px;"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item key="1">
        <PieChartOutlined />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <DesktopOutlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <InboxOutlined />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <MailOutlined />
            <span>Navigation One</span>
          </span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <AppstoreOutlined />
            <span>Navigation Two</span>
          </span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: "SideMenu"
};
</script>

<style scoped>
.menu-wrap {
  /* width: 200px; */
  height: 100%;
  background-color: #001529;
}
</style>