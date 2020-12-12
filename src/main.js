import { createApp } from "vue";
import "minireset.css";
import config from "@/utils/config";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount("#app");

config(app);
