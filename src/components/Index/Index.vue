<template>
  <div>
    <el-carousel indicator-position="outside" height="300px" >
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.idView" alt="杲弢">
      </el-carousel-item>
    </el-carousel>
    <div class="index_main">
      <div class="main1">
        <p>订单记录</p>
        <ul>
          <li v-for="(yinan,index) in items" :key="index" class="main1-news">
            <div>{{yinan}}</div>
          </li>
        </ul>
      </div>
      <div class="main2">
        <img src="@/assets/indexliu2.png" alt="">
      </div>
      <div class="main3">
        <p>公司动态</p>
        <ul>
          <li v-for="(yinan,index) in items" :key="index" class="main3-news">
            <div>{{yinan}}</div>
          </li>
        </ul>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data(){
    return{
       imgList:[
        {id:0,idView:require('@/assets/cleanban1.png')},
        {id:1,idView:require('@/assets/cleanban2.png')},
        {id:2,idView:require('@/assets/cleanban3.png')}
      ],
      items:[
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
      ]
    }
  }
}
</script>

<style scoped>
/* 轮播 */
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item img{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item {
    width: 100%;
    margin: 0 auto;
  }
  .el-carousel {
    width: 80%;
    margin: 0 auto;
  }
  /* 疑难 */
.main3-news,.main1-news{
  height: 33px;
  line-height: 33px;
  overflow: hidden;
}
  /* main */
.index_main{
  width: 80%;
  margin: 0 auto;
  display: flex;
}
.main1,.main3{
  width: 20%;
}
.main2{
  width: 60%;
  text-align: center;
}
.main1 p{
  font-size: 1.5rem;
  font-weight: 600;
}
.main3 p{
  font-size: 1.5rem;
  font-weight: 600;
}
.main2 img{
  width: 100%;
}
</style>