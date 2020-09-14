<template>
  <header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1"><router-link to='/'>公司首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to='/Cooperation'>商务合作</router-link></el-menu-item>
      <el-menu-item index="3">疑难解答</el-menu-item>
      <el-menu-item index="4">公司动态</el-menu-item>
      <el-menu-item index="5">产品中心</el-menu-item>
      <el-menu-item index="6">关于我们</el-menu-item>
    
    </el-menu>
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
</style>
