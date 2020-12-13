<template>
  <div class="c-header">
    <div class="c-header__logout" title="退出" @click="logout">
      <el-avatar icon="el-icon-right" size="small"></el-avatar>
    </div>
    <div class="c-header__user">{{ user.username }}</div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
