<!--
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-03-01 17:48:40
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-01 17:57:50
 * @reason       : 
 * @FilePath     : \vite-demo\src\layout\default\index.vue
-->

<template>
  <div class="default-view">
    <Header />
    <div class="container">
      <SideMenu />
      <div class="content-wrap">
        <Content />
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import SideMenu from "./side-menu";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default {
  name: "DefaultView",
  components: {
    SideMenu,
    Header,
    Content,
    Footer
  }
};
</script>

<style  scoped>
.footer {
  width: 100%;
  height: 32px;
  background-color: brown;
}
</style>