<template>
  <el-space :direction="direction">
    <el-dropdown>
      <el-button text key="plain" type="default" size="large"> EN </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <router-link to="/chinese">{{ $t("menu.Chinese") }}</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/english">{{ $t("menu.English") }}</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="ml-2">
      <el-button size="large" round type="primary">{{
        $t("menu.Connect")
      }}</el-button>
    </div>
  </el-space>
</template>
<script setup>
import {getCurrentInstance, ref} from "vue";
let {proxy} = getCurrentInstance();
defineProps({
  direction: {
    type: String,
    default: "horizontal",
  },
});
</script>
