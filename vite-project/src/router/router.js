
import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import FirstProject from '../components/FirstProject.vue';
import StartWork from '../components/StartWork.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HelloWorld,
    meta: { title: '首页' },
  },
  {
    path: '/project',
    name: 'Project',
    component: FirstProject,
    meta: { title: '项目' },
  },
  {
    path: '/start',
    name: 'Start',
    component: StartWork,
    meta: { title: '启动' },
  },
  // 👇 路由只负责匹配，子应用挂载容器放在 SubApp.vue 里
  //    path 必须和 main.js 里 registerMicroApps 的 activeRule 一致
  {
    path: '/my-react-app',
    name: 'ReactSubApp',
    component: () => import('../views/SubApp.vue'),
    meta: { title: 'React 子应用' },
  },
];

const router = createRouter({
  // 用 hash 模式最稳，不会刷新 404
  // 如果要用 history 模式，把 createWebHashHistory 改成 createWebHistory
  history: createWebHashHistory(),
  routes,
});

export default router;