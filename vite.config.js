import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "/@/": pathResolve("src")
    }
  },
  cssPreprocessOptions: {
    less: {
      javascriptEnabled: true
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
