<template>
  <a-layout class="default-view">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">EMS</div>
      <!-- 侧边栏组件 -->
      <SideMenu />
      <side-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <!-- 顶部导航栏 -->
        <Nav />
      </a-layout-header>
      <a-layout-content class="layout-content">
        <div class="breadcrumb-wrap">
          <!-- 面包屑组件 -->
          <Breadcrumb />
        </div>
        <!-- 主体内容 -->
        <Content>
          <router-view></router-view>
        </Content>
      </a-layout-content>
      <a-layout-footer class="layout-footer" style="text-align: center">
        <!-- 脚部组件 -->
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { ref } from "vue";
// 引用组件 start
import Breadcrumb from "./breadcrumb/index.vue";
import SideMenu from "./side-menu/index.vue";
import Nav from "./nav/index.vue";
import Content from "./content/index.vue";
import Footer from "./footer/index.vue";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined
} from "@ant-design/icons-vue";

const collapsed = ref(false);
</script>
<style lang="less" scoped>
@deep: ~":deep()";
.default-view {
  min-height: 100vh;
}
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
.layout-header {
  padding: 0;
  background: #fff;
}
.layout-content {
  padding: 0 24px;
  .breadcrumb-wrap {
    height: 22px;
    margin: 8px 0;
  }
}
.site-layout .site-layout-background {
  background: #fff;
}
.ant-layout-sider-trigger {
  position: absolute;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
@{deep} .ant-layout-sider-trigger {
  position: absolute;
  left: 0;
  bottom: 0;
}

@media screen and (max-width: 1366px) {
  @{deep} .ant-layout-sider-trigger {
    bottom: 16px;
  }
}
</style>
