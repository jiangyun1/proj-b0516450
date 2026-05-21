<template>
  <div class="page flex-col">
    <div class="section_10 flex-row">
      <div class="group_2 flex-col"></div>
      <span class="text_15">
        Top&nbsp;Mintsis&nbsp;Liver&nbsp;Sport&nbsp;hot&nbsp;NFT&nbsp;Projects&nbsp;being&nbsp;minted&nbsp;before&nbsp;anyone&nbsp;else.
      </span>
      <div class="group_3 flex-col"></div>
    </div>
    <div class="section_11 flex-col">
      <div class="box_11 flex-row">
        <img class="image_2" referrerpolicy="no-referrer"
          src="./assets/img/SketchPng013310a9c686850cce2050114bee272a8c657540db50ce61269ca2063b499f3f.png" />
        <div class="block_1 flex-col"></div>
        <div class="block_2 flex-col">
          <div class="block_3 flex-col"></div>
          <div class="text-wrapper_7 flex-col"><span class="text_16">212</span></div>
        </div>
        <div class="block_4 flex-col"></div>
        <div class="block_5 flex-col"></div>
        <div class="block_6 flex-col"></div>
      </div>
      <div class="box_12 flex-row">
        <div class="box_8 flex-col"></div>
        <div class="text-wrapper_8 flex-col justify-between">
          <span class="text_3">Myself&nbsp;Name</span>
          <span class="text_4">Dashboard</span>
        </div>
        <div class="text-wrapper_3 flex-col"><span class="text_5">Save&nbsp;Draft</span></div>
        <div class="text-wrapper_4 flex-col"><span class="text_6">Publish</span></div>
       
        <el-popover placement="right" title="标题" width="200" trigger="manual" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          v-model="visible">
          <shezhi></shezhi>
          <div class="box_9 flex-col" slot="reference" @click="visible = !visible"></div>
        </el-popover>
      </div>
      <div class="text-wrapper_5 flex-col">
        <span class="text_7">You&nbsp;must&nbsp;settings&nbsp;before&nbsp;publish</span>
      </div>
      <span class="text_8">Give&nbsp;it&nbsp;a&nbsp;title…</span>
      <div class="image-text_4 flex-row justify-between">
        <div class="box_10 flex-col"></div>
        <div class="text-group_4 flex-col justify-between">
          <span class="text_9">Myself&nbsp;Name</span>
          <span class="text_10">0x0e452EfF59A0f4C7d0AE0910F2Df525C1b5C3Cc8</span>
        </div>
      </div>

      <span class="text_11"><el-input type="textarea" :rows="2" placeholder="What’sonyourmind？" v-model="textarea"
          style="width: 100%;">
        </el-input></span>
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" 
        >
        <div class="section_6 flex-row">
          <div class="image-text_5 flex-row justify-between">
            <div class="group_1 flex-col"></div>
            <span class="text-group_2">Import&nbsp;Entry</span>
          </div>
        </div>
        <!-- <el-button size="small" type="primary">点击上传</el-button> -->
      </el-upload>

      <div class="section_7 flex-row justify-between">
        <span class="text_12">Blocks</span>
        <div class="section_8 flex-row">
          <div class="image-text_6 flex-row justify-between">
            <div class="section_9 flex-col"></div>
            <span class="text-group_3">+</span>
          </div>
          <span class="text_13">/</span>
        </div>
      </div>
    </div>
    <div class="text-wrapper_6 flex-col">
      <span class="text_14">BBS&nbsp;Inc&#64;2022.All&nbsp;rights&nbsp;reserved</span>
    </div>
  </div>
</template>
<script>
import shezhi from '../lanhu_shezhizhankaiquanbuneirong';
export default {
  components:{
    shezhi
  },
  data() {
    return {
      visible: false,
      textarea: "",
      constants: {}
    };
  },
  methods: {
    sz() {
      this.$router.push('/lanhu_bianxiewenzhangx2fshezhi')
    }
  }
};
</script>




<style scoped lang="css" src="./assets/index.rem.css" />