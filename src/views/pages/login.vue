<template>
  <div class="login_warp">
    <div class="form_warp">
      <el-form :model="loginData" status-icon class="demo-ruleForm" hide-required-asterisk>
        <el-form-item label="账号" prop="username" :rules="[{
            required:true,message:'必填项',trigger:'change'
        }]">
          <el-input v-model="loginData.username" autocomplete="off">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label="密码" prop="passwd" :rules="[{
            required:true,message:'必填项',trigger:'change'
        }]">
          <el-input v-model.number="loginData.passwd" type="password" show-password @keypress.enter="submitForm(loginData)">
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="summbitBtn" type="primary" @click="submitForm(loginData)">登录</el-button>
        </el-form-item>
        <!-- <p>{{$store.state.tab.isCollapse}}</p> -->
      </el-form>

    </div>

  </div>

</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { loginApi } from "../../util/request";
// import
const store = useStore();
const router = useRouter();

const loginData = reactive({
  username: "",
  passwd: "",
});

function submitForm(data) {
  //  console.log(data);
  loginApi(data).then((res) => {
    console.log("登录返回值", res);
    if (res.data) {
      store.commit("setUserInfo", res.data);
      localStorage.setItem("loginData", JSON.stringify(res.data));
      router.push({
        path: "/home",
      });
    }
  });
  /*   store.commit("setUserInfo", data);
  localStorage.setItem("loginData", JSON.stringify(data));
  router.push({
    path: "/home",
  }); */
}
</script>


<style lang="less" scope>
.login_warp {
  width: 100%;
  height: 100vh;
  background: rgb(54, 59, 90);
  display: flex;
  align-items: center;
  justify-content: center;
  .form_warp {
    background: white;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    .el-form-item {
      display: flex;
      justify-content: center;
    }
    .summbitBtn {
      margin: 0 auto;
    }
  }
}
</style>