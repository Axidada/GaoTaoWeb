<template>
  <div class="product">
    <div class="pro_ban">
      <img src="@/assets/ynjd.png" alt="产品" />
    </div>
    <div class="pro_title">
      <h2>我们的产品</h2>
    </div>
    <div class>
      <div class="pro_nav">
        <ul>
          <li>
            <i class="el-icon-collection-tag"></i>全部
          </li>
          <li>
            <i class="el-icon-edit"></i>可蔺
          </li>
          <li>
            <i class="el-icon-location-information"></i>白猫
          </li>
        </ul>
      </div>
      <el-row>
        <el-col :span="4" v-for="(o, index) in 30" :key="o" :offset="index > 0 ? 3 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>

<style scoped>
.product {
  background-color: #f7f7f7;
}
.pro_title h2 {
  text-align: center;
  margin: 2% 0;
  font-size: 2em;
  font-weight: 600;
}
/* nav */
.pro_nav {
  position: fixed;
  right: 51%;
  top: 81%;
  margin-right: 600px;
  border: 1px solid #eee;
  border-radius: 10%;
  padding: 0.5%;
  background: white;
}
.pro_nav ul li {
  height: 40px;
  font-size: 1.5em;
}
/* 走马灯 */
.el-row {
  width: 80%;
  margin: 0 auto;
}
.el-col-offset-0 {
  margin-left: 10%;
}
.el-col-4 {
  margin-bottom: 1%;
  width: 20%;
}
.el-col-offset-3 {
  margin-left: 10%;
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
  clear: both;
}
</style>