<template>
  <div class="page flex-col">
    <div class="section_1 flex-row">
      <div class="block_1 flex-col"></div>
      <span class="text_1">
        Top&nbsp;Mintsis&nbsp;Liver&nbsp;Sport&nbsp;hot&nbsp;NFT&nbsp;Projects&nbsp;being&nbsp;minted&nbsp;before&nbsp;anyone&nbsp;else.
      </span>
      <div class="block_2 flex-col"></div>
    </div>
    <div class="section_2 flex-col">
      <div class="group_1 flex-row">
        <img
          class="image_1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng013310a9c686850cce2050114bee272a8c657540db50ce61269ca2063b499f3f.png"
        />
        <div class="box_1 flex-col"></div>
        <div class="box_2 flex-col">
          <div class="group_2 flex-col"></div>
          <div class="text-wrapper_1 flex-col"><span class="text_2">212</span></div>
        </div>
        <div class="box_3 flex-col"></div>
        <div class="box_4 flex-col"></div>
        <div class="box_5 flex-col"></div>
      </div>
      <div class="group_3 flex-row">
        <div class="block_3 flex-col">
          <span class="text_3">Myself&nbsp;Name</span>
          <span class="text_4">Dashboard</span>
          <span class="text_5">Give&nbsp;it&nbsp;a&nbsp;title…</span>
          <div class="image-text_1 flex-row justify-between">
            <div class="block_4 flex-col"></div>
            <div class="text-group_1 flex-col justify-between">
              <span class="text_6">Myself&nbsp;Name</span>
              <span class="text_7">0x0e452EfF59A0f4C7d0AE0910F2Df525C1b5C3Cc8</span>
            </div>
          </div>
          <span class="text_8">What’s&nbsp;on&nbsp;your&nbsp;mind？</span>
          <div class="group_4 flex-row">
            <div class="image-text_2 flex-row justify-between">
              <div class="box_6 flex-col"></div>
              <span class="text-group_2">Import&nbsp;Entry</span>
            </div>
          </div>
          <div class="group_5 flex-row justify-between">
            <span class="text_9">Blocks</span>
            <div class="section_3 flex-row">
              <div class="image-text_3 flex-row justify-between">
                <div class="group_6 flex-col"></div>
                <span class="text-group_3">+</span>
              </div>
              <span class="text_10">/</span>
            </div>
          </div>
        </div>
        <div class="block_5 flex-col justify-between">
          <div class="box_7 flex-row justify-between">
            <div class="text-wrapper_2 flex-col"><span class="text_11">Save&nbsp;Draft</span></div>
            <div class="text-wrapper_3 flex-col"><span class="text_12">Publish</span></div>
            <div class="group_7 flex-col"></div>
          </div>
          <div class="text-wrapper_4 flex-col">
            <span class="text_13">You&nbsp;must&nbsp;settings&nbsp;before&nbsp;publish</span>
          </div>
        </div>
        <div class="block_6 flex-col"></div>
        <div class="block_7 flex-col">
          <div class="box_8 flex-row">
            <div class="group_8 flex-col" @click="fanhui"></div>
            <span class="text_14">Setting</span>
          </div>
          <div class="box_9 flex-col"></div>
          <div class="box_10 flex-row justify-between">
            <div class="group_9 flex-col"></div>
            <span class="text_15">Cover&nbsp;image</span>
          </div>
          <span class="text_16">
            Set&nbsp;the&nbsp;tone&nbsp;for&nbsp;your&nbsp;entry&nbsp;by&nbsp;featuring&nbsp;an&nbsp;image&nbsp;in&nbsp;the&nbsp;entry&nbsp;masthead.
          </span>
          <div class="box_11 flex-col"></div>
          <div class="box_12 flex-row justify-between">
            <div class="box_13 flex-col"></div>
            <span class="text_17">Meta&nbsp;title</span>
          </div>
          <span class="paragraph_1">
            The&nbsp;title&nbsp;used&nbsp;on&nbsp;search&nbsp;engine&nbsp;results&nbsp;pages&nbsp;and&nbsp;across&nbsp;social&nbsp;media.&nbsp;
            <br />
            Keep&nbsp;it&nbsp;short&nbsp;and&nbsp;snappy(40-50&nbsp;characters).
          </span>
          <div class="text-wrapper_5 flex-col"><span class="text_18">Write&nbsp;a&nbsp;meta&nbsp;title…</span></div>
          <div class="box_14 flex-row justify-between">
            <div class="group_10 flex-col"></div>
            <span class="text_19">Choose&nbsp;The&nbsp;Community</span>
          </div>
          <div class="box_15 flex-row justify-between">
            <span class="text_20">USA</span>
            <div class="section_4 flex-col"></div>
          </div>
          <div class="box_16 flex-row justify-between">
            <div class="group_11 flex-col"></div>
            <span class="text_21">Profit&nbsp;sharing</span>
          </div>
          <div class="box_17 flex-row justify-between">
            <span class="text_22">Plan&nbsp;A</span>
            <div class="group_12 flex-col"></div>
          </div>
          <div class="text-wrapper_6 flex-row justify-between">
            <span class="text_23">Author：30%</span>
            <span class="text_24">Platform：10%</span>
            <span class="text_25">Reader：60%</span>
          </div>
          <div class="box_18 flex-row justify-between">
            <div class="block_8 flex-col"></div>
            <span class="text_26">Profit&nbsp;sharing</span>
          </div>
        </div>
      </div>
      <div class="group_13 flex-col"></div>
    </div>
    <div class="text-wrapper_7 flex-col">
      <span class="text_27">BBS&nbsp;Inc&#64;2022.All&nbsp;rights&nbsp;reserved</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {}
    };
  },
  methods: {
    fanhui(){
      this.$router.push('/lanhu_bianxiewenzhang')
    }
  }
};
</script>
<style scoped lang="css" src="./assets/index.rem.css" />