<script setup>
// 只有一件事：提供乾坤挂载子应用的 DOM 容器
</script>

<template>
  <div class="sub-app-wrapper">
    <h2>⚛️ React 子应用区域</h2>
    <!-- ⚠️ id 必须和 main.js 第 26 行 registerMicroApps 的 container 一致 -->
    <div id="react-container" style="width: 100%; height: calc(100vh - 160px);"></div>
  </div>
</template>

<style scoped>
.sub-app-wrapper { padding: 20px; }
</style>