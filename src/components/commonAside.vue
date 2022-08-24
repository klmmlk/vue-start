<template>
  <el-menu default-active="/" class="el-menu-vertical-demo" text-color="white" active-text-color="yellow" background-color="#545c64" :collapse="$store.state.menu.isCollapse">
    <h3>通用管理系统</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <template #title>{{ item.lable }}</template>
    </el-menu-item>

    <el-sub-menu v-for="(item, itemIndex) in hasChildren" :index="itemIndex+''" :key="itemIndex">
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.lable }}</span>
      </template>
      <el-menu-item @click="clickMenu(subItem)" v-for="(subItem, subIndex) in item.children" :key="subItem.path" :index="subIndex+''">{{ subItem.lable }}</el-menu-item>
      <!-- <el-menu-item @click="collaseCtrl">{{store.state.isCollapse}}</el-menu-item> -->
    </el-sub-menu>
  </el-menu>

  <div @click="sidebarCtrl" class="collapseCtrlBar">
    <el-icon>
      <DArrowRight v-show="$store.state.menu.isCollapse" />
      <DArrowLeft v-show="!$store.state.menu.isCollapse" />
    </el-icon>
  </div>

</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "@vue/runtime-core";
import { itemsApi } from "../util/request";
const router = useRouter();
const store = useStore();
// 获取items数据并提交到目录和itemsdata中
itemsApi().then((res) => {
  if (res.code == 20000) {
    // console.log(typeof res.data);
    store.dispatch('setItems',res.data)
    
    // console.log(store.state.items.itemData);
    // store.commit('setChildMenu',res.data)
  }
});

const noChildren = computed(() =>
  store.state.menu.menu.filter((item) => !item.children)
);
const hasChildren = computed(() =>
  store.state.menu.menu.filter((item) => item.children)
);

// console.log(store.state.items.itemData);

const clickMenu = function (item) {
  router.push({
    path: item.path,
  });
};
const sidebarCtrl = function () {
  store.commit("collapseMenu");
};
</script>



<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  text-align: center;
  /* background: #c2c2c2; */
  border: none;
  overflow: hidden;
  h3 {
    color: white;
  }
}

.collapseCtrlBar {
  display: flex;
  align-items: center;
  color: white;
  transition: 500ms;
}

.collapseCtrlBar:hover {
  background: #353a3f;
  cursor: pointer;
}
</style>