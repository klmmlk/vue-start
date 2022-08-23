<template>
  <header>
    <div class="l-content">
      <!-- 插槽，由父组件决定插入内容 -->
      <slot></slot>
      <h3 style="color:white">首页</h3>

    </div>
    <div class="r-content">
      <div>
        <span>自动刷新数据:</span>
        <el-switch v-model="value3" inline-prompt active-text="是" inactive-text="否" />
      </div>
      <el-dropdown size="small">
        <span>
          <el-badge :value="12" class="item" type="danger" :max="10">
            <el-avatar :src="avrtarUrl" />
          </el-badge>
        </span>
        <template #dropdown>
          <el-dropdown-menu>

            <el-dropdown-item class="clearfix">系统消息
              <el-badge :value="12" class="item" type="danger" />
            </el-dropdown-item>

            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item @click="logOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>

</template>
<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const value3 = ref(false);
const avrtarUrl = ref(
  "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
);

const logOut = () => {
  localStorage.removeItem("loginData");
  store.commit("logout");
  router.push({
    path: "/login",
  });
};
</script>

<style lang="less" scope>
.l-content {
  display: flex;
  align-items: center;
}
header {
  //   background: red;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .r-content {
    display: flex;
    align-items: center;
    margin-right: 10px;
    span {
      color: white;
      font-size: 10px;
    }
    .el-switch {
      margin-right: 10px;
    }
  }
}
</style>