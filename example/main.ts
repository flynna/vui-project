import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

// 测试自定义的组件
import Vui from '../src/index';

const app = createApp(App);

app.use(Vui);

app.use(createPinia());
app.use(router);

app.mount('#app');
