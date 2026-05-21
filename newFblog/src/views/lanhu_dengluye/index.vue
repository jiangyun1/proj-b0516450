<template>
  <div class="page flex-col">
    <div class="box_1 flex-col">
      <div class="group_1 flex-col">
        <div class="block_1 flex-col"></div>
        <div class="block_2 flex-col">
          <span class="text_1">Pick&nbsp;a&nbsp;wallet&nbsp;to&nbsp;login&nbsp;to&nbsp;Chainbase</span>
          <div class="group_2 flex-row" @click="Login">
            <div class="image-text_5 flex-row justify-between">
              <img
                class="image_1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngf54bdfe0f31efafb838fb6aaf8b9c9460ffee3925e50d684723746073507e4a3.png"
              />
              <span class="text-group_1">Metamask</span>
            </div>
            <div class="image-text_6 flex-row justify-between">
              <span class="text-group_2">Popular</span>
              <div class="group_3 flex-col"></div>
            </div>
          </div>
          <div class="group_4 flex-row"  @click="Login">
            <div class="image-text_7 flex-row justify-between">
              <img
                class="thumbnail_1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng2536853080191043ea9264590fd853334dc79f21dc7b63e383a39588a25abb3f.png"
              />
              <span class="text-group_3">Fortmatic</span>
            </div>
            <div class="group_5 flex-col"></div>
          </div>
          <div class="group_6 flex-row"  @click="Login">
            <div class="image-text_8 flex-row justify-between">
              <img
                class="image_2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngf8e032836360584e6710ef06eab8090c7884896605369cc17f60140ca4732e26.png"
              />
              <span class="text-group_4">WalletConnect</span>
            </div>
            <div class="group_7 flex-col"></div>
          </div>
          <span class="text_2" @click="oneLogin">First&nbsp;time&nbsp;setting&nbsp;up&nbsp;a&nbsp;wallet？</span>
          <img
            class="image_3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPnga1983515ffeb37babd2ac54a6d10b0126393c413c1e7661c69e8c882c6074199.png"
          />
        </div>
      </div>
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
    oneLogin(){
      this.$router.push('/lanhu_dengluyex2fdiyicidenglu')
    },
    Login(){
      this.$router.push('/lanhu_dengluyex2fdiyicidenglux2fshuruwenanjiaohu')
    }
  }
};
</script>
<style scoped lang="css" src="./assets/index.css" />