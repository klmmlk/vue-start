<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <el-main>
          <router-view>
          </router-view>
        </el-main>
        <el-footer>
          Footer
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import commonAside from "../components/commonAside.vue";
import CommonHeader from "../components/commonHeader.vue";
</script>

<style>
.el-header {
  background-color: #333;
}
.el-main {
  padding: 0;
  margin: 20px;
}
.el-aside {
  height: 100vh;
  /* background: rgba(65, 49, 49,0.5); */
  display: flex;
  /* align-items: center; */
  background-color: #545c64;
}
</style>