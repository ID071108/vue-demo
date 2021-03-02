<template>
  <a-layout class="default-view">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">EMS</div>
      <SideMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header" />
      <a-layout-content class="layout-content">
        <div class="breadcrumb-wrap">
          <a-breadcrumb separator=">">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>
            <a-breadcrumb-item href="">Application List</a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer class="layout-footer" style="text-align: center">
        EMS ©2021 Created by Getech
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import SideMenu from "./side-menu/index.vue";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    SideMenu,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ["1"]
    };
  }
});
</script>
<style lang="less" scoped>
@deep: ~">>>";
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
