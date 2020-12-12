<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isCollapse = ref(false);

    return {
      isCollapse
    };
  }
};
</script>

<style>
.el-header {
  line-height: 60px;
  background-color: gray;
}

.el-main {
  background-color: #e9eef3;
}
</style>
