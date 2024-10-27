<template>
  <div class="min-h-screen black-bg-color">
    <el-container>
      <el-header
        class="shadow-md fixed w-full z-50 bg-color border-b-1 ht-75 black-bg-color"
      >
        <Header :isMobile="isMobile"></Header>
      </el-header>
      <el-main class="mat-75">
        <AppMain />
      </el-main>
      <el-footer>
        <span class="mr-4">{{ current_date.getFullYear() }} © BASE VUE</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import {ref, onMounted,getCurrentInstance,computed} from "vue";
import {Sidebar, AppMain, Header} from "./components";
const current_date = new Date();
import ResizeHook from "./hook/ResizeHandler";
ResizeHook();
let { proxy } = getCurrentInstance();

let isMobile = computed(() => {
  return proxy.$store.state.app.device === "mobile";
});
</script>
