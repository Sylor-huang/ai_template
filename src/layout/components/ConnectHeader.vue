<template>
  <el-space :direction="direction">
    <el-dropdown>
      <el-space>
        <el-button text key="plain" type="default" size="large" class="p-2">
          <img src="@/assets/lanauge.svg" class="w-4 mr-2"/>
          EN 
        </el-button>
      </el-space>
     
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
      <el-button size="large" round type="primary" class="gradient-text">{{
        $t("menu.BuyToken")
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
