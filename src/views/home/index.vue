<template>
  <el-row class="home">
    <el-col :span="8">
      <el-card shadow="hover">
        <template #header>
          <div class="User">
            <!-- avatar -->
            <el-avatar class="avatar" :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <div class="Userinfo">
              <p class="name">{{userinfo.username}}</p>
              <p class="access">{{userLel()}}</p>
            </div>
          </div>
        </template>

        <div class="login-info">
          <p>上次登录时间：<span>{{userinfo.lastLoginDate}}</span></p>
          <p>上次登录地点：<span>成都</span></p>
        </div>
      </el-card>
      <el-card class="info_view">
        <el-table :data="tableData">
          <el-table-column v-for="(value,key) in tabelLabel" :key="key" :prop="key" :label="value" />
        </el-table>
      </el-card>
    </el-col>
  </el-row>

</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
const store = useStore();
const tableData = reactive([
  {
    name: "oppo",
    todayBuy: 100,
    monthbuy: 300,
    totalBuy: 800,
  },
  {
    name: "xiaomi",
    todayBuy: 200,
    monthbuy: 330,
    totalBuy: 840,
  },
  {
    name: "huawei",
    todayBuy: 300,
    monthbuy: 650,
    totalBuy: 1800,
  },
  {
    name: "apple",
    todayBuy: 300,
    monthbuy: 530,
    totalBuy: 7030,
  },
  {
    name: "sumsang",
    todayBuy: 1020,
    monthbuy: 3500,
    totalBuy: 8900,
  },
]);
const tabelLabel = {
  name: "品牌",
  todayBuy: "今日购买",
  monthbuy: "本月购买",
  totalBuy: "总共购买",
};

const userinfo = store.state.uInfo.userInfo;
function userLel() {
  switch (userinfo.userAcess) {
    case 1:
      return "超级管理员";
    case 2:
      return "管理员";
    case 3:
      return "操作员";
  }
}
</script>

<style lang="less" scope>
.User {
  display: flex;
  .avatar {
    margin-right: 20px;
  }
}
.info_view {
  margin-top: 20px;
}
</style>