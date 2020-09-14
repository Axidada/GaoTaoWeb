import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Element from 'element-ui'
// 引入组件
import Index from './components/Index/Index'
import Cooperation from './components/Cooperation/Cooperation'
// 要告诉 vue 使用 Router
Vue.use(Router)
Vue.use(Element)

// 公司首页      (Index)              ==>  一个轮播三张图片 1.清新(jpg)跳转公司产品 2.合作跳转商务合作  3.蓬勃跳转活动中心   导航外加一个登录/注册
// 商务合作      (Cooperation)        ==>  预约咨询 未登录需要填写 联系人姓名 + 联系方式 + 备注   已登录确认信息就好
// 疑难解答      (Troubleshooting)    ==>  工业砖 + 玻化砖常见问题
// 公司动态      (News)               ==>  合作商招募 + 企业招聘 + 爆款产品推荐
// 产品中心      (Product)            ==>  可蔺产品(可蔺产品八款：GTPC/PTRA/LPTRA/BBA/1号磨片/2号磨片/3号磨片/增塑剂) + 白猫产品  
// 关于我们      (About)              ==>  全国办事处(办事处地址/负责人/联系方式) + 企业责任(企业文化理念/社会责任) + 品牌背书(企业历史/专利奖项/合作机构) + 合作案例(大润发/欧尚/苏果/永辉生鲜/盒小马)
// 会员中心      (Vip)                ==>  姓名/职务/所属公司/出生年月/性别

const routes = [
  {path:'/',component:Index},//注意这里一定不能加s，否则报错
  {path:'/Cooperation',component:Cooperation},
]

const router = new Router({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
