import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';
import * as echarts from "echarts"
// 导入qiankun相关方法
import { registerMicroApps, start } from 'qiankun';
import router from './router/router.js';


const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(ElementPlus);
 app.use(router);
app.config.globalProperties.$echarts = echarts;

// 注册子应用
registerMicroApps([
  {
    name: 'my-react-app', // 子应用名称
    entry: '//localhost:3000', // React子应用运行地址(需替换为实际地址)
    container: '#react-container', // 挂载子应用的容器ID
    activeRule: '/my-react-app', // 触发子应用的路由规则
  },
]);

// 启动qiankun
start();

app.mount('#app');
