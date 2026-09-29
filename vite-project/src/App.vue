<script setup>
import HelloWorld from './components/HelloWorld.vue'
import FirstProject from './components/FirstProject.vue'
import StartWork from './components/StartWork.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <!-- 侧边导航 -->
    <aside class="sidebar">
      <h3>🏠 主应用</h3>
      <nav>
        <RouterLink to="/home">首页</RouterLink>
        <RouterLink to="/project">项目</RouterLink>
        <RouterLink to="/start">启动</RouterLink>
        <RouterLink to="/my-react-app">⚛️ React 子应用</RouterLink>
      </nav>
    </aside>
 
    <!-- 主内容区：路由出口 -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout { display: flex; min-height: 100vh; }
.sidebar { width: 200px; background: #2c3e50; color: #fff; padding: 20px 0; }
.sidebar h3 { margin: 0 0 20px; padding: 0 20px; }
.sidebar nav { display: flex; flex-direction: column; }
.sidebar nav a { padding: 12px 20px; color: #bdc3c7; text-decoration: none; }
.sidebar nav a:hover { background: #34495e; color: #fff; }
.sidebar nav a.router-link-active { background: #3498db; color: #fff; }
.main-content { flex: 1; padding: 20px; }
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
