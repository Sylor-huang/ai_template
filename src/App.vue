<template>
  <el-config-provider :locale="proxy.$language">
    <router-view />
  </el-config-provider>
</template>
<script setup>
import { getCurrentInstance } from 'vue'
import { ElConfigProvider } from 'element-plus'
let { proxy } = getCurrentInstance();
</script>
<style lang="scss">
html {
  height: 100%;
}
</style>