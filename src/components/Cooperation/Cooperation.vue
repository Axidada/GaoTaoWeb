<template>
  <div>
    <div class="pro_ban">
      <img src="@/assets/swhz300.png" alt="商务合作" />
    </div>
    <div class="sw_main">
      <div class="sczs">
        <p>市场招商</p>
      </div>
      <div class="formation">
        <div class="caption">
          <p>公司名称</p>
          <p>上海杲弢商贸有限公司</p>
        </div>
        <div class="content">
          <p>联系人</p>
          <p>13122486072(高先生)</p>
        </div>
        <div class="email">
          <p>邮箱</p>
          <p>1213036993@qq.com</p>
        </div>
        <div class="add">
          <p>市场部办公地址</p>
          <p>上海市浦东新区沈杜公路118空间10号楼302</p>
        </div>
      </div>
    </div>
    <div class="mapandxx">
      <div class="map">
         <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
            <!--缩放-->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <!--定位-->
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <!--点-->
            <bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
                <!--提示信息-->
                <bm-info-window :show="map.show">
                  <p class="gongsi">上海杲弢商贸有限公司</p>
                  <p>电话：13122486072(高先生)</p>
                  <p>地址：上海市浦东新区沈杜公路118空间10号楼302</p>
                </bm-info-window>
            </bm-marker>
        </baidu-map>
      </div>
      <div class="information">

        <p class="in-gs">上海杲弢商贸有限公司</p>

        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="姓名">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="职位">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        map:{
          center: {lng: 121.585275, lat: 31.090627},
          zoom: 16,
          show: true,
          dragging: true
        },
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
      }
    },
     methods: {
        handler ({BMap, map}) {
          // let me = this;
          console.log(BMap, map)
          // 鼠标缩放
          map.enableScrollWheelZoom(true);
          // 点击事件获取经纬度
          map.addEventListener('click', function (e) {
              console.log(e.point.lng, e.point.lat)
          })
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        },
    }
  };
</script>

<style scoped>
  .sw_main{
    width: 80%;
    margin: 0 auto;

  }
  .sczs{
    height: 100px;
    line-height: 100px;
    font-size: 1.5rem;
    border-bottom: #eeeeee solid 1px;
  }
  .formation{
    margin-top: 20px;
    display: flex;
    border-bottom: #eeeeee solid 1px;
  }
  .caption{
    width: 25%;
  }
  .caption > p:nth-child(1){
    color: #00a1ba;
    font-size: 14px;
    height: 33px;
    line-height: 33px;
  }
  .caption > p:nth-child(2){
    font-size: 1rem;
    height: 33px;
    line-height: 33px;
  }
  .content{
    width: 25%;
  }
  .content > p:nth-child(1){
    color: #00a1ba;
    font-size: 14px;
    height: 33px;
    line-height: 33px;
  }
  .content > p:nth-child(2){
    font-size: 1rem;
    height: 33px;
    line-height: 33px;
  }
  .email{
    width: 25%;
  }
  .email > p:nth-child(1){
    color: #00a1ba;
    font-size: 14px;
    height: 33px;
    line-height: 33px;
  }
  .email > p:nth-child(2){
    font-size: 1rem;
    height: 33px;
    line-height: 33px;
  }
  .add{
    width: 25%;
    margin-bottom: 20px;
  }
  .add > p:nth-child(1){
    color: #00a1ba;
    font-size: 14px;
    height: 33px;
    line-height: 33px;
  }
  .add > p:nth-child(2){
    font-size: 1rem;
    height: 33px;
    line-height: 33px;
  }
  /* 地图 */
  .information{
    width: 50%;
  }
  .map{
    width: 80%;
    height: 400px;
  }
  .mapandxx{
    width: 80%;
    margin: 3% auto;
    display: flex;
  }
  .gongsi{
    font-size: 1rem;
    color: red;
  }
  .in-gs{
    font-size: 1.5rem;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 20px;
  }
  .el-form-item__content{
    text-align: center;
  }
</style>