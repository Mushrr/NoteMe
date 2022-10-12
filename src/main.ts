import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

/**
 * pinia plugins
 */

app.use(pinia);

app.use(router); // 路由

app.mount('#app');