<template>
  <div class="flex items-center justify-between">
    <div class="mr-8 flex-auto-size">
      <router-link class="inline-block" to="/">
        <el-space>
          <img src="@/assets/logo2.svg" class="h-10 mx-auto" />
          <strong class="logo-title">LuckyLotto</strong>
        </el-space>
      </router-link>
    </div>
    <div v-if="isMobile">
      <el-icon :size="24" @click="drawer = true" class="mt-2" color="#2669f5">
        <Fold />
      </el-icon>
      <el-drawer
        v-model="drawer"
        direction="ltr"
        size="50%"
        title="导航"
        :destroy-on-close="true"
        modal-class="customMenu"
      >
        <Sidebar memuMode="vertical"></Sidebar>
        <ConnectHeader direction="vertical"></ConnectHeader>
      </el-drawer>
    </div>
    <div class="flex-1" v-else>
      <Sidebar></Sidebar>
    </div>
    <div class="flex-auto-size" v-if="!isMobile">
      <ConnectHeader direction="horizontal"></ConnectHeader>
    </div>
  </div>
</template>
<script setup>
import {getCurrentInstance, ref} from "vue";
import {Sidebar} from "@/layout/components";
import ConnectHeader from "@/layout/components/ConnectHeader";
let {proxy} = getCurrentInstance();
defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
});

let drawer = ref(false);
</script>
