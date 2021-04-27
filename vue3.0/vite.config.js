/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-25 16:18:00
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 16:49:12
 * @reason       : https://vitejs.dev/config/
 * @FilePath     : \vite-demo\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

/**
 * @name 解析文件路径
 * @param {String} dir 文件路径
 * @return {String} 返回文件的绝对路径
 */
function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

export default defineConfig({
  root: process.cwd(),
  resolve: {
    alias: [
      {
        find: /^\/@\//,
        replacement: pathResolve("src") + "/"
      },
      {
        find: /^\/@views\//,
        replacement: pathResolve("src/views") + "/"
      },
      {
        find: /^\/@components\//,
        replacement: pathResolve("src/components") + "/"
      },
      {
        find: /^\/@utils\//,
        replacement: pathResolve("src/utils") + "/"
      },
      {
        find: /^\/@router\//,
        replacement: pathResolve("src/router") + "/"
      }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // Used for global import to avoid the need to import each style file separately
          // reference:  Avoid repeated references
          // hack: `true; @import (reference) "${resolve(
          //   "src/design/config.less"
          // )}";`
          // ...generateModifyVars()
        },
        javascriptEnabled: true
      }
    }
  },
  optimizeDeps: {
    include: [
      "axios",
      "vue",
      "ant-design-vue",
      "@ant-design/colors",
      "@ant-design/icons-vue",
      "screenfull",
      "vue-router",
      "vuex"
    ]
  },
  proxy: {
    "/v1": {
      target: "http://local-account.makeit.vip",
      changeOrigin: true
    }
  },
  plugins: [vue()]
});
