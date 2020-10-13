<template>
  <div>
    <div class="pro_ban">
      <img src="@/assets/ynjd.png" alt="疑难解答" />
    </div>
    <div class="yinan">
      <p>疑难解答</p>
    </div>
    <el-row>
      <el-col :span="16" v-for="(o, index) in 100" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' ,display: 'flex'}">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"/>
          <div style="padding: 14px;">
            <span>疑难解答</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
        <div class="product">
          <p>推荐产品</p>
        </div>
      </el-col>
      
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentDate: new Date()
    }
  }
};
</script>

<style scoped>
.yinan{
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 2rem;
  margin: 2% 0;
}
.el-col-16 {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.el-card {
  width: 80%;
}
.product{
  width: 20%;
  border: 1px solid ;
}
[class*=el-col-] {
  float: none;
}
</style>