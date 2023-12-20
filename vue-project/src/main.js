import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router/index.js";
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";


