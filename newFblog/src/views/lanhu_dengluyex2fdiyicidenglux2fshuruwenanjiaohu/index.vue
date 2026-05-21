<template>
  <div class="page flex-col">
    <div class="group_1 flex-col">
      <div class="group_2 flex-col">
        <div class="block_1 flex-col" @click="hanhui"></div>
        <div class="block_2 flex-col">
          <span class="text_1">Create&nbsp;an&nbsp;account</span>
          <div class="block_3 flex-col"></div>
          <div class="text-wrapper_1">
            <span class="text_2">Display&nbsp;name</span>
            <span class="text_3">*</span>
          </div>
          <div class="block_4 flex-col">
            <div class="text-wrapper_2 flex-col"> <el-input v-model="input1" placeholder="MarryNdwghMdhs"></el-input>
            </div>
          </div>
          <div class="text-wrapper_3">
            <span class="text_5">Email</span>
            <span class="text_6">*</span>
          </div>
          <div class="block_5 flex-col">
            <div class="text-wrapper_4 flex-col"><el-input v-model="input2" placeholder="MarryNdwghMdhs"></el-input>
            </div>
          </div>
          <span class="text_8">Wallet&nbsp;Address</span>
          <div class="block_6 flex-col">
            <div class="text-wrapper_5 flex-col">
              <el-input v-model="input3" placeholder="MarryNdwghMdhs"></el-input>
            </div>
          </div>
          <div class="text-wrapper_6 flex-col" @click="login"><span class="text_10">Create&nbsp;Post</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as dataNew from '@/api/dataNew'
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      constants: {}
    };
  },
  methods: {
    hanhui() {
      this.$router.push('/lanhu_shouyex2fxialadanchuang')
    },
    login() {
      let param = {
        "publicAddress": "0x0e452EfF59A0f4C7d0AE0910F2Df525C1b5C3C13",
        // "username": "fengxuan",
        "password": "123456"
      }
      dataNew.save(param).then(res => {
        sessionStorage.setItem('token',res.data.data.token);
        this.$router.push('/lanhu_shouyex2fxialadanchuang')
      })

    }
  }
};
</script>








<style scoped lang="css" src="./assets/index.rem.css" />