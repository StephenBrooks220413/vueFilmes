import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import * as mdb from 'mdb-ui-kit';
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .use(mdb)
  .mount("#app");
