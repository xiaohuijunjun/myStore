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
  <div style="display: flex;">

    <div class="one">

  <div class="tow"> </div>
</div>
/* 第一种flex居中 */
<div class="one1">
  <div class="tow1"> </div>
</div>
/* 第二种根据父子元素宽高减半设置margin的方法 */
<div class="one2">

  <div class="tow2"> </div>
</div>
/* 第三种flex父子元素居中设置 */
<div class="one3">
  <div class="tow3"> </div>
</div>
  </div>

</template>

<style scoped>
.one {
  width: 200px;
  height: 200px;
  display: flex;
  background-color: #e3e333;
}
/* 第一种flex居中 */
.tow {
  width: 20px;
  height: 20px;
  background-color: aqua;
  margin: auto;
}

.one1 {
  width: 200px;
  height: 200px;
  background-color: #e3e333;
}
/* 第二种根据父子元素宽高减半设置margin的方法 */
.tow1 {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: aqua;
  margin-left: 90px;
  margin-top: 90px;
}
/* 第三种flex父子元素居中设置 */
.one2 {
  width: 200px;
  height: 200px;
  background-color: #e3e333;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tow2 {
  width: 20px;
  height: 20px;
  background-color: aqua;
}
</style>
