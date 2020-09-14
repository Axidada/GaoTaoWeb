<template>
  <el-container>
    <el-header>
      <gt-header></gt-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <gt-footer></gt-footer>
    </el-footer>
  </el-container>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    "gt-header": Header,
    "gt-footer": Footer
  }
}
</script>

<style>

</style>
