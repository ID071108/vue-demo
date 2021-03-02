import { createApp } from "vue";
import "ant-design-vue/dist/antd.css";
import { registerComps } from "./utils/register-comps";
import router, { setupRouter } from "./router";
import { setupStore } from "/@/store";
import { isDevMode } from "./utils/env";
import App from "./App.vue";

const app = createApp(App);

// Register global components
registerComps(app);

// Configure routing
setupRouter(app);

// Configure vuex store
setupStore(app);

// Mount when the route is ready
router.isReady().then(() => {
  app.mount("#app", true);
});

// The development environment takes effect
if (isDevMode()) {
  app.config.performance = true;
  window.__APP__ = app;
}
