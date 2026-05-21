import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_shouyex2fxialadanchuang from '../views/lanhu_shouyex2fxialadanchuang/index.vue'
import lanhu_dengluyex2fdiyicidenglux2fshuruwenanjiaohu from '../views/lanhu_dengluyex2fdiyicidenglux2fshuruwenanjiaohu/index.vue'
import lanhu_yulanyex2fyoujianzhizuonftdetubiao from '../views/lanhu_yulanyex2fyoujianzhizuonftdetubiao/index.vue'
import lanhu_dengluyex2fdiyicidenglu from '../views/lanhu_dengluyex2fdiyicidenglu/index.vue'
import lanhu_bianxiewenzhangx2fshezhi from '../views/lanhu_bianxiewenzhangx2fshezhi/index.vue'
import lanhu_dengluye from '../views/lanhu_dengluye/index.vue'
import lanhu_bianxiewenzhang from '../views/lanhu_bianxiewenzhang/index.vue'
import lanhu_gerenzhongxin from '../views/lanhu_gerenzhongxin/index.vue'
import lanhu_bianxiewenzhangx2fjiaohuzhuangtai from '../views/lanhu_bianxiewenzhangx2fjiaohuzhuangtai/index.vue'
import lanhu_yonghushezhibeifen3 from '../views/lanhu_yonghushezhibeifen3/index.vue'
import lanhu_qianbaoxialakuang from '../views/lanhu_qianbaoxialakuang/index.vue'
import lanhu_yulanye from '../views/lanhu_yulanye/index.vue'
import lanhu_tianjianftdanchuangx2fmorenyangshibeifen from '../views/lanhu_tianjianftdanchuangx2fmorenyangshibeifen/index.vue'
import lanhu_huaban from '../views/lanhu_huaban/index.vue'
import lanhu_shequliebiao from '../views/lanhu_shequliebiao/index.vue'
import lanhu_tiezixiangqingbeifen from '../views/lanhu_tiezixiangqingbeifen/index.vue'
import lanhu_dianjishoucanggengduo from '../views/lanhu_dianjishoucanggengduo/index.vue'
import lanhu_shezhizhankaiquanbuneirong from '../views/lanhu_shezhizhankaiquanbuneirong/index.vue'
import lanhu_shouye1beifen4 from '../views/lanhu_shouye1beifen4/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/lanhu_shouyex2fxialadanchuang"
  },
  {
    path: '/lanhu_shouyex2fxialadanchuang',
    name: 'lanhu_shouyex2fxialadanchuang',
    component: lanhu_shouyex2fxialadanchuang
  },
  {
    path: '/lanhu_dengluyex2fdiyicidenglux2fshuruwenanjiaohu',
    name: 'lanhu_dengluyex2fdiyicidenglux2fshuruwenanjiaohu',
    component: lanhu_dengluyex2fdiyicidenglux2fshuruwenanjiaohu
  },
  {
    path: '/lanhu_yulanyex2fyoujianzhizuonftdetubiao',
    name: 'lanhu_yulanyex2fyoujianzhizuonftdetubiao',
    component: lanhu_yulanyex2fyoujianzhizuonftdetubiao
  },
  {
    path: '/lanhu_dengluyex2fdiyicidenglu',
    name: 'lanhu_dengluyex2fdiyicidenglu',
    component: lanhu_dengluyex2fdiyicidenglu
  },
  {
    path: '/lanhu_bianxiewenzhangx2fshezhi',
    name: 'lanhu_bianxiewenzhangx2fshezhi',
    component: lanhu_bianxiewenzhangx2fshezhi
  },
  {
    path: '/lanhu_dengluye',
    name: 'lanhu_dengluye',
    component: lanhu_dengluye
  },
  {
    path: '/lanhu_bianxiewenzhang',
    name: 'lanhu_bianxiewenzhang',
    component: lanhu_bianxiewenzhang
  },
  {
    path: '/lanhu_gerenzhongxin',
    name: 'lanhu_gerenzhongxin',
    component: lanhu_gerenzhongxin
  },
  {
    path: '/lanhu_bianxiewenzhangx2fjiaohuzhuangtai',
    name: 'lanhu_bianxiewenzhangx2fjiaohuzhuangtai',
    component: lanhu_bianxiewenzhangx2fjiaohuzhuangtai
  },
  {
    path: '/lanhu_yonghushezhibeifen3',
    name: 'lanhu_yonghushezhibeifen3',
    component: lanhu_yonghushezhibeifen3
  },
  {
    path: '/lanhu_qianbaoxialakuang',
    name: 'lanhu_qianbaoxialakuang',
    component: lanhu_qianbaoxialakuang
  },
  {
    path: '/lanhu_yulanye',
    name: 'lanhu_yulanye',
    component: lanhu_yulanye
  },
  {
    path: '/lanhu_tianjianftdanchuangx2fmorenyangshibeifen',
    name: 'lanhu_tianjianftdanchuangx2fmorenyangshibeifen',
    component: lanhu_tianjianftdanchuangx2fmorenyangshibeifen
  },
  {
    path: '/lanhu_huaban',
    name: 'lanhu_huaban',
    component: lanhu_huaban
  },
  {
    path: '/lanhu_shequliebiao',
    name: 'lanhu_shequliebiao',
    component: lanhu_shequliebiao
  },
  {
    path: '/lanhu_tiezixiangqingbeifen',
    name: 'lanhu_tiezixiangqingbeifen',
    component: lanhu_tiezixiangqingbeifen
  },
  {
    path: '/lanhu_dianjishoucanggengduo',
    name: 'lanhu_dianjishoucanggengduo',
    component: lanhu_dianjishoucanggengduo
  },
  {
    path: '/lanhu_shezhizhankaiquanbuneirong',
    name: 'lanhu_shezhizhankaiquanbuneirong',
    component: lanhu_shezhizhankaiquanbuneirong
  },
  {
    path: '/lanhu_shouye1beifen4',
    name: 'lanhu_shouye1beifen4',
    component: lanhu_shouye1beifen4
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
