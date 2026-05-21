<template>
  <div class="page flex-col">
    <div class="box_90 flex-row">
      <div class="block_49 flex-col"></div>
      <span class="text_93">
        Top&nbsp;Mintsis&nbsp;Liver&nbsp;Sport&nbsp;hot&nbsp;NFT&nbsp;Projects&nbsp;being&nbsp;minted&nbsp;before&nbsp;anyone&nbsp;else.
      </span>
      <div class="block_50 flex-col"></div>
    </div>
    <div class="box_91 flex-col">
      <div class="group_74 flex-row">
        <img class="image_9" referrerpolicy="no-referrer"
          src="./assets/img/SketchPng013310a9c686850cce2050114bee272a8c657540db50ce61269ca2063b499f3f.png" />
        <div class="group_75 flex-col">
          <div class="group_76 flex-col"></div>
        </div>
        <div class="group_77 flex-col">
          <div class="group_78 flex-col"></div>
          <div class="text-wrapper_51 flex-col"><span class="text_94">212</span></div>
        </div>
        <div class="group_79 flex-col"></div>
        <el-popover placement="bottom" width="200" trigger="click">
          <div class="block_2 flex-col">
            <div class="group_4 flex-row justify-between">
              <div class="box_12 flex-col"></div>
              <div class="text-wrapper_2 flex-col justify-between">
                <span class="text_9">Myself&nbsp;Name</span>
                <span class="text_10">0x0e452EfF59A0f4C7d0AE0910F2Df525C1b5C3Cc8</span>
              </div>
            </div>
            <div class="group_5 flex-col">
              <div class="text-wrapper_3">
                <span class="text_11">$28.67</span>
                <span class="text_12">USD</span>
              </div>
              <span class="text_13">Total&nbsp;balance</span>
            </div>
            <div class="group_6 flex-row justify-between">
              <div class="section_2 flex-col"></div>
              <span class="text_14">Add&nbsp;Funds</span>
            </div>
            <div class="group_7 flex-row">
              <div class="box_13 flex-col"></div>
              <div class="text-wrapper_4 flex-col justify-between">
                <span class="text_15">ETH</span>
                <span class="text_16">Ethereum</span>
              </div>
              <div class="text-wrapper_5 flex-col justify-between">
                <span class="text_17">0.0174</span>
                <span class="text_18">$28.67&nbsp;USD</span>
              </div>
            </div>
          </div>
          <div class="group_80 flex-col" slot="reference"></div>
        </el-popover>
        <el-popover placement="bottom" width="200" trigger="click">
          <div class="block_17 flex-col">
            <div class="box_96 flex-row justify-between">
              <div class="group_28 flex-col"></div>
              <div class="text-wrapper_59 flex-col justify-between">
                <span class="text_63">Myself&nbsp;Name</span>
                <span class="text_64">&#64;elonmusk</span>
              </div>
            </div>
            <div class="box_43 flex-row">
              <div class="section_17 flex-col"></div>
              <span class="text_65">User&nbsp;Setting</span>
            </div>
            <div class="box_44 flex-row justify-between">
              <div class="group_29 flex-col"></div>
              <span class="text_66">Your&nbsp;Contents&amp;Stats</span>
            </div>
            <div class="box_45 flex-row">
              <div class="block_18 flex-col"></div>
              <span class="text_67">Monetization</span>
            </div>
            <div class="text-wrapper_22 flex-col" @click="logout()"><span class="text_68">Logout</span></div>
          </div>
          <div class="group_81 flex-col" slot="reference"></div>
        </el-popover>
      </div>
      <div class="group_82 flex-row justify-between">
        <div class="group_83 flex-col justify-between">
          <div class="block_8 flex-col">
            <div class="section_26 flex-row justify-between">
              <div class="group_5 flex-col"></div>
              <div class="text-wrapper_2 flex-col">
                <span class="text_9">What&nbsp;Do&nbsp;you&nbsp;Want&nbsp;share?</span>
              </div>
            </div>
            <div class="section_27 flex-row" @click="bxwz">
              <div class="group_7 flex-col"></div>
              <span class="text_10">ASK</span>
              <div class="group_8 flex-col"></div>
              <span class="text_11">POST</span>
              <div class="group_9 flex-col"></div>
              <span class="text_12">IMAGE</span>
              <div class="group_10 flex-col"></div>
              <span class="text_13">VIDEO</span>
            </div>
          </div>
          <div class="block_9 flex-row">
            <div class="text-wrapper_3 flex-col" @click="tag(1)"><span class="text_14">sdf</span></div>
            <div class="text-wrapper_3 flex-col" @click="tag(2)"><span class="text_14">Hot</span></div>
            <div class="text-wrapper_3 flex-col" @click="tag(3)"><span class="text_14">NEW</span></div>
            <div class="text-wrapper_3 flex-col" @click="tag(4)"><span class="text_14">Top</span></div>
          </div>
          <div class="group_51 flex-col" v-for="item in contentList" :key="item">
            <div class="group_84 flex-row justify-between">
              <div class="group_52 flex-col"></div>
              <div class="text-wrapper_33">
                <span class="text_79">Post&nbsp;by</span>
                <span class="text_80">Fengxuan</span>
                <span class="text_81">&#64;bbs·1&nbsp;hours</span>
              </div>
            </div>
            <div class="text-wrapper_52 flex-row">
              <span class="text_82">
                {{item.post_title}}
                <!-- Do&nbsp;you&nbsp;want&nbsp;to&nbsp;know&nbsp;Yoda’s&nbsp;species&nbsp;or&nbsp;have&nbsp;it&nbsp;remain&nbsp;a&nbsp;mystery？ -->
              </span>
            </div>
            <div class="group_85 flex-row">
              <div class="image-text_49 flex-row">
                <div class="text-group_27 flex-row">
                  <span class="text_83">
                    {{item.post_title}}
                  </span>
                  <span class="text_84" @click="xiangqing">See&nbsp;more</span>
                </div>
                <div class="box_77 flex-col"></div>
              </div>
            </div>
            <div class="group_86 flex-row">
              <div class="box_79 flex-col"></div>
            </div>
            <div class="group_87 flex-row">
              <div class="box_92 flex-row">
                <div class="image-text_50 flex-row justify-between" @click="shouchang">
                  <img class="thumbnail_9" referrerpolicy="no-referrer"
                    src="./assets/img/SketchPnge2399cf7ed47f94dbb5fd46e3999598a57bae744ef196740cbc68c4aa06aa1e9.png" />
                  <span class="text-group_28">100.2k</span>
                </div>
              </div>
              <div class="image-wrapper_5 flex-col">
                <img class="thumbnail_10" referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng1b8d6152494d3138f7e9d531586bcbbe4bc9bd55e94f889d1666f0811b8d2423.png" />
              </div>
              <div class="image-text_51 flex-row justify-between">
                <div class="group_53 flex-col"></div>
                <span class="text-group_18">1.025</span>
              </div>
              <div class="image-text_52 flex-row justify-between">
                <div class="group_54 flex-col"></div>
                <span class="text-group_19">5502Comments</span>
              </div>
              <div class="image-text_53 flex-row justify-between">
                <div class="box_82 flex-col"></div>
                <span class="text-group_20">Share</span>
              </div>
              <div class="image-text_54 flex-row justify-between">
                <div class="group_55 flex-col"></div>
                <span class="text-group_21">Save</span>
              </div>
              <div class="box_83 flex-col"></div>
            </div>
          </div>
          <div class="group_51">
        
          </div>
          
        </div>
        <div class="block_13 flex-col">
          <div class="box_19 flex-col">
            <div class="section_4 flex-col justify-end">
              <div class="text-wrapper_53 flex-row justify-between">
                <span class="text_30">Hot&nbsp;Post&nbsp;over</span>
                <span class="text_31">Last&nbsp;24&nbsp;Hours</span>
              </div>
              <img class="image_2" referrerpolicy="no-referrer"
                src="./assets/img/SketchPnge6beaf57632019cc8c337530a81b6a0ee00d02cb0fbf247d8ca97dc005c2fb59.png" />
            </div>
            <div class="section_28 flex-row justify-between">
              <div class="section_6 flex-col"></div>
              <span class="text_32">小衙内朋友圈装逼引爆网位姐后…</span>
            </div>
            <div class="section_29 flex-row">
              <div class="block_14 flex-col"></div>
              <span class="text_33">小衙内朋友圈装逼引爆</span>
              <div class="block_15 flex-col"></div>
            </div>
            <div class="section_30 flex-row justify-between">
              <div class="box_20 flex-col"></div>
              <span class="text_34">小衙内朋友圈装逼引爆网络姐后…</span>
            </div>
            <div class="section_31 flex-row justify-between">
              <div class="block_16 flex-col"></div>
              <span class="text_35">小衙内朋友圈装逼引爆网络</span>
            </div>
            <img class="image_3" referrerpolicy="no-referrer"
              src="./assets/img/SketchPngdb2ba990fdf54388251d32044f30c7d0ec2218a4f010fd856628ef7ad171c2c5.png" />
            <div class="section_32 flex-row justify-between">
              <span class="text_36">View&nbsp;All</span>
              <div class="box_21 flex-col"></div>
            </div>
            <span class="text_37">1</span>
            <span class="text_38">3</span>
            <span class="text_39">2</span>
            <span class="text_40">4</span>
          </div>
          <div class="box_22 flex-col">
            <div class="box_23 flex-col justify-end">
              <div class="image-text_57 flex-row justify-between">
                <div class="text-group_9">
                  <span class="text_41">Top&nbsp;User&nbsp;Over</span>
                  <span class="text_42"></span>
                  <span class="text_43">Last&nbsp;24&nbsp;Hours</span>
                </div>
                <div class="box_24 flex-col"></div>
              </div>
              <img class="image_4" referrerpolicy="no-referrer"
                src="./assets/img/SketchPnge6beaf57632019cc8c337530a81b6a0ee00d02cb0fbf247d8ca97dc005c2fb59.png" />
            </div>
            <div class="group_88 flex-row">
              <img class="label_1" referrerpolicy="no-referrer"
                src="./assets/img/SketchPng259b80ff77f24039e79412059afb41099309e5816a07a525d53fae1c70863ca7.png" />
              <div class="text-wrapper_54 flex-col justify-between">
                <span class="text_44">Fengxuanc</span>
                <span class="text_45">&#64;elonmusk</span>
              </div>
              <div class="group_20 flex-col"></div>
              <div class="group_21 flex-col"></div>
              <div class="group_22 flex-col"></div>
              <div class="group_23 flex-col"></div>
              <div class="text-wrapper_11 flex-col"><span class="text_46">Follow</span></div>
            </div>
            <div class="group_89 flex-row">
              <img class="label_2" referrerpolicy="no-referrer"
                src="./assets/img/SketchPng2e22897fac3729d015b10e8c3d182837b328a0fd5fe3ba3198d74b7c0f0f33f9.png" />
              <div class="text-wrapper_55 flex-col justify-between">
                <span class="text_47">Fengxuanc</span>
                <span class="text_48">&#64;elonmusk</span>
              </div>
              <div class="box_27 flex-col"></div>
              <div class="box_28 flex-col"></div>
              <div class="box_29 flex-col"></div>
              <div class="box_30 flex-col"></div>
              <div class="text-wrapper_13 flex-col"><span class="text_49">Follow</span></div>
            </div>
            <div class="group_90 flex-row">
              <img class="label_3" referrerpolicy="no-referrer"
                src="./assets/img/SketchPng67778f3f4aa2bad6085d74be1885f9b2a382100ba50b1c1fdbafe477e8dd3ec9.png" />
              <div class="text-wrapper_56 flex-col justify-between">
                <span class="text_50">Fengxuanc</span>
                <span class="text_51">&#64;elonmusk</span>
              </div>
              <div class="box_32 flex-col"></div>
              <div class="box_33 flex-col"></div>
              <div class="text-wrapper_15 flex-col"><span class="text_52">Follow</span></div>
            </div>
            <div class="group_91 flex-row justify-end">
              <div class="image-text_58 flex-row justify-between">
                <span class="text-group_10">Fengxuanc</span>
                <div class="section_11 flex-col"></div>
              </div>
              <div class="text-wrapper_16 flex-col"><span class="text_53">Follow</span></div>
              <div class="image-text_59 flex-row justify-between">
                <img class="label_4" referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng9a3c1cef6b35a8fc22cce8fbc3361e7e64838e5e3dd871bed07787de449a927c.png" />
                <span class="text-group_11">&#64;elonmusk</span>
              </div>
            </div>
            <img class="image_5" referrerpolicy="no-referrer"
              src="./assets/img/SketchPng729167d895894dfa77fb8fc0b833b5ca5fce2b8d4376c3f41f02f706dc3b4382.png" />
            <div class="image-text_60 flex-row justify-between">
              <span class="text-group_12">Show&nbsp;more</span>
              <div class="group_24 flex-col"></div>
            </div>
            <div class="box_35 flex-col">
              <div class="box_93 flex-row justify-between">
                <div class="box_36 flex-col"></div>
                <div class="box_37 flex-col"></div>
                <div class="box_38 flex-col"></div>
              </div>
              <div class="box_94 flex-row justify-between">
                <div class="group_25 flex-col"></div>
                <div class="group_26 flex-col"></div>
                <div class="group_27 flex-col"></div>
              </div>
              <div class="box_95 flex-row justify-between">
                <div class="section_15 flex-col"></div>
                <div class="section_16 flex-col"></div>
              </div>
            </div>
          </div>
          <div class="box_39 flex-col">
            <span class="text_54">
              Your&nbsp;personal&nbsp;BBS&nbsp;frontpage.&nbsp;Come&nbsp;here&nbsp;to&nbsp;check&nbsp;in&nbsp;with&nbsp;your&nbsp;favorite&nbsp;communities.
            </span>
            <div class="text-wrapper_17 flex-col"><span class="text_55">Create&nbsp;Post</span></div>
            <div class="text-wrapper_18 flex-col"><span class="text_56">Create&nbsp;a&nbsp;community</span></div>
          </div>
          <div class="box_40 flex-col">
            <div class="text-wrapper_57 flex-row justify-between">
              <span class="text_57">Help</span>
              <span class="text_58">About</span>
            </div>
            <div class="text-wrapper_58 flex-row justify-between">
              <span class="text_59">Topic</span>
              <span class="text_60">Content&nbsp;Policy</span>
            </div>
            <span class="text_61">Private&nbsp;Policy</span>
            <div class="box_41 flex-col"></div>
            <span class="text_62">BBS&nbsp;Inc&#64;2022.All&nbsp;rights&nbsp;reserved</span>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
// import qs from "qs"
import * as dataNew from '@/api/dataNew'
export default {
  data() {
    return {
      contentList:[],
      constants: {}
    };
  },
  created() {
    this.login()
  },
  methods: {
    xiangqing(){
      this.$router.push('/lanhu_tiezixiangqingbeifen')
    },
    login() {
      console.log(sessionStorage.getItem('token'));
 
      dataNew.recommend().then(res => {
        console.log(res);
        this.contentList=res.data.data.contentList

      })
      dataNew.topUser().then(res => {
        console.log(res);
        this.contentList=res.data.data.contentList

      })
    },
    bxwz() {
      this.$router.push('/lanhu_bianxiewenzhang')
    },
    shouchang() {
      this.$router.push('/lanhu_dianjishoucanggengduo')
    },
    tag(val) {
      console.log(val);

    },
    oneLogin() {
      this.$router.push('/lanhu_dengluyex2fdiyicidenglu')
    },
    Login() {
      this.$router.push('/lanhu_dengluyex2fdiyicidenglux2fshuruwenanjiaohu')
    },
    logout() {
      this.$router.push('/lanhu_dengluyex2fdiyicidenglux2fshuruwenanjiaohu')
    },
  }
};
</script>










<style scoped lang="css" src="./assets/index.rem.css" />