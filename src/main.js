import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "./assets/main.css";
import 'tailwindcss/tailwind.css';
axios.defaults.baseURL = "http://localhost:3000/products";

const app = createApp(App);

app.use(router);
app.config.globalProperties.$http = axios;

app.mount("#app");
