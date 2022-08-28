<template>
  <div>
    <el-row>
      <el-col :span="12" class="add_item">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>添加项目</span>
            </div>
          </template>
          <el-input v-model="input" placeholder="输入项目名称" />
          <el-upload class="uploadElt" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15">
            <el-icon class="el-icon--upload">
              <upload-filled />
            </el-icon>
            <div class="el-upload__text">
              拖动文件到此 <em>选择文件上传</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                选择CSV文件
              </div>
            </template>
          </el-upload>
          <el-button>数据预览</el-button>
          <el-button type="primary" @click="test">提交</el-button>
        </el-card>

      </el-col>
      <el-col :span="12">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>项目控制</span>
              <el-button type="primary" @click="changeItemsActivate">提交</el-button>
            </div>

          </template>

          <el-transfer v-model="value" :data="data" :titles="['进行中项目', '已完成项目']" @change='changeItems' />

        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>项目派发</span>
            </div>
          </template>
          <el-select v-model="value1" multiple placeholder="Select" style="width: 240px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { itemsApi } from "../../util/request";
import { useStore } from "vuex";
import { itemsChange } from "../../util/request";
const store = useStore();
// 获取项目

const value = ref([]);
const itemsdata = ref(store.getters.getItems);
const generateData = () => {
  const data = [];
  // console.log(itemsdata);
  for (let i in itemsdata.value) {
    data.push({
      key: itemsdata.value[i].itemName,
      label: itemsdata.value[i].itemName,
    });
    if (!itemsdata.value[i].activate) {
      value.value.push(itemsdata.value[i].itemName);
    }
    // console.log(itemsdata.value[i].activate);
  }
  return data;
};
const data = ref(generateData());

watch(
  () => store.getters.getItems,
  (count, prevCount) => {
    itemsdata.value = count;
    data.value = generateData();
  }
);
//
function test() {
  store.commit("addItems");
}

function changeItems() {
  // console.log(value);
}
function changeItemsActivate() {
  itemsChange(value.value).then((res) => {
    if (res.code == 20000) {
      console.log(store.state.items.itemData);
    }
  });
}

const value1 = ref([]);
const value2 = ref([]);
const value3 = ref([]);
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const input = ref("");
</script>

<style lang="less" scope>
.add_item {
  // background: blue;
  min-height: 36px;
  border-radius: 3px;

  .el-input {
    width: 70%;
  }
  .uploadElt {
    margin-top: 20px;
  }
}
.el-col {
  // margin: 10px;
}
</style>