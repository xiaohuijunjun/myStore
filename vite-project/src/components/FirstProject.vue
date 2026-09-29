<script setup>
import { reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
defineProps({
  msg: String,
})
const datas = reactive({
  name: '小灰灰'
});

const seachAny = () => {
  ElMessageBox.alert('搜索你所想', 'Title', {
    confirmButtonText: 'OK',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `action: 123`,
      })
    },
  })
}
</script>

<template>
  <el-icon @click="seachAny"><Search /></el-icon> 搜索
  <h1>{{ msg }}</h1>
  <h2>{{ datas.name }}</h2>
    <div id="react-container"></div>
    <router-view />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
