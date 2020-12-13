<template>
  <el-container>
    <el-aside width="220px">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="onOpen"
        @close="onClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
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
import { ref, getCurrentInstance } from "vue";

export default {
  setup() {
    const isCollapse = ref(false);

    const onOpen = () => {};

    const onClose = () => {};

    const { ctx } = getCurrentInstance();

    ctx.$message({
      type: "success",
      message: "aaa"
    });

    return {
      isCollapse,
      onOpen,
      onClose
    };
  }
};
</script>

<style>
.el-container {
  height: 100%;
}

.el-aside {
  height: 100%;
  background-color: #545c64;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}

.el-header {
  background-color: gray;
}

.el-main {
  height: 100%;
  background-color: #e9eef3;
}

.el-menu {
  overflow: hidden;
}
</style>
