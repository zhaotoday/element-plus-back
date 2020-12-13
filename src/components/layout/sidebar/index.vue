<template>
  <div class="c-sidebar">
    <div class="c-sidebar__logo" @click="$router.push('/')">
      <div class="c-sidebar__logo-icon">
        <el-avatar icon="el-icon-eleme" size="small"></el-avatar>
      </div>
      后台管理系统
    </div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="#001529"
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
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
