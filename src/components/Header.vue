<template>
  <header>
    <div class="header">
      <div class="header-flex">
        <div class="slogan">
          <p class="slogan-gt">杲弢-专业清洁30年</p>
          <p>联系人：15684157890(雷先生)</p>
        </div>
      </div>
    </div>
    <div class="header_nav">
      <div class="logo">
        <img src="@/assets/gtlogo.png" alt />
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link to="/Product">产品中心</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/Troubleshooting">疑难解答</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/News">公司动态</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/Cooperation">商务合作</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to="/About">关于我们</router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  border-bottom: 2px solid black;
  width: 80%;
  margin: 0 auto;
}
.header-flex {
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}
/* nav */
.header_nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 0 auto;
}
.el-menu-demo{
  width: 80%;
}
.logo {
  width: 20%;
}
.slogan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
.slogan-gt {
  font-size: 1.5rem;
  font-weight: 600;
}

/* element nav */
.el-menu-demo {
  display: flex;
  justify-content: flex-end;
}
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
.el-menu-item {
  width: 4%;
  /* border: 1px solid #000000; */
  text-align: center;
  /* margin: 10px !important;*/
  padding: 0 !important; 
  font-weight: 600;
  /* border-bottom-color: #000000 !important; */
}
.el-menu-item a {
  display: block;
  width: 100%;
  height: 100%;
}
.router-link-exact-active {
  background-color: aqua;
}
.el-menu--horizontal>.el-menu-item .router-link-exact-active {
    border-bottom: 2px solid #409EFF;
    color: #303133;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
    color: #303133;
}
.el-menu--horizontal > .el-menu-item {
  width: 8%;
  height: auto;
}
</style>
