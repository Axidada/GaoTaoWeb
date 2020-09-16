<template>
  <div>
     <el-carousel indicator-position="outside" height="660px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.idView" alt="杲弢">
      </el-carousel-item>
    </el-carousel>
    <div>
      <p>我们的服务</p>
      <img src="" alt="">
    </div>
    <div>
      <p>合作伙伴</p>
      
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

  }
</style>