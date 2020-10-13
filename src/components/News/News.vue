<template>
  <div>
    <div class="pro_ban">
      <img src="@/assets/news.png" alt="杲弢新闻" />
    </div>
    <div class="xw">
      <p>公司动态</p>
    </div>
    <div class="new_main">
      <div class="daohang">
        <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-s-flag"></i>
            <span slot="title">企业新闻</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-s-data"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-s-platform"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="main">
        <ul>
          <li v-for="(newm,index) in news" :key="index" class="main-n">
            <span>·</span>{{newm}}
          </li>
        </ul>
      </div>
      <div class="pro">
        <p class="pro_hot">热门产品</p>
        <el-row>
          <el-col :span="16" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px',display: 'flex' }">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
     news:[
        '测试测试测试测试测试测试测试测试测试测试测试测试1',
        '测试测试测试测试测试测试试测试测试测试测试测试2',
        '测试测试测试测试测试测试试测试测试测试测试测试3',
        '测试测试测试测试测试测试2',
        '测试测试测试测试测试测试2',
        '测试测试测试测试测试测试2',
        '测试测试测试测试测试测试2',
        '测试测试测试测试测试测试2',
        '测试测试测试测试测试测试2',
        '测试测试测试测试测试测试2',
      ],
      currentDate: new Date()
    }
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    }
  }
  

}
</script>

<style scoped>
/* 标题 */
.xw{
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 2rem;
  margin: 2% 0;
}
.el-menu {
  border-right:none;
}
.new_main{
  display: flex;
  width: 80%;
  margin: 0 auto;
}
.daohang{
  width: 20%;
}
.main{
  width: 60%;
}
.pro{
  width: 20%;
}
.main-n{
  height: 33px;
  line-height: 33px;
  letter-spacing: 4px;
  padding-left: 5%;
}
/* 产品 */
  .image{
    width: 50%!important;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
  .el-col-16 {
    width: 100%;
  }
  .el-col-offset-2 {
    margin-left: auto;
  }
  .pro_hot{
    height: 33px;
    line-height: 33px;
    font-size: 1rem;
    font-weight: 600;
  }
</style>