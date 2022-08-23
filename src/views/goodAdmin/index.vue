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
          <el-button type="primary" @click="getItems()">提交</el-button>
        </el-card>

      </el-col>
      <el-col :span="12">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>项目控制</span>
            </div>
          </template>
          <el-transfer v-model="value" :data="data" :titles="['进行中项目', '已完成项目']" />
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
import { ref } from "vue";
import { itemsApi } from "../../util/request";

const generateData = () => {
  const data = [];
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    });
  }
  return data;
};

const data = ref(generateData());
const value = ref([]);

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