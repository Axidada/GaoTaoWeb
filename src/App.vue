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
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
    <el-backtop></el-backtop>
  </el-container>
</template>
<script>
import Header from "./components/Header";
import Footer from './components/Footer'

export default {
  components: {
    "gt-header": Header,
    "gt-footer": Footer
  },
};
</script>

<style>
.el-header {
  padding: 0 !important;
  height: auto !important;
}
.el-main {
  padding: 0 !important;
}
.el-footer {
  padding: 0 !important;
}
.pro_ban{
  width: 80%;
  margin: 0 auto;
}
.pro_ban img {
  width: 100%;
  
}
/* 通常的清除默认样式： */
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
img {
  vertical-align: top;
  border: none;
}
/* 设置默认字体 */
body,
button, input, select, textarea /* for ie */ {
  font: 14px/1.5 tahoma, \5b8b\4f53, sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
} /* 将斜体扶正 */
code,
kbd,
pre,
samp {
  font-family: courier new, courier, monospace;
} /* 统一等宽字体 */
small {
  font-size: 12px;
} /* 小于 12px 的中文很难阅读, 让 small 正常化 */
/** 重置列表元素 **/
ul,
ol {
  list-style: none;
}
/** 重置文本格式元素 **/
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
sup {
  vertical-align: text-top;
} /* 重置, 减少对行高的影响 */
sub {
  vertical-align: text-bottom;
}
/** 重置表单元素 **/
legend {
  color: #000;
} /* for ie6 */
fieldset,
img {
  border: 0;
} /* img 搭车：让链接里的 img 无边框 */
button,
input,
select,
textarea {
  font-size: 100%;
} /* 使得表单元素在 ie 下能继承字体大小 */
/* 注：optgroup 无法扶正 */
/* 重置 HTML5 元素 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  display: block;
  margin: 0;
  padding: 0;
}
mark {
  background: #ff0;
}
/* 设置placeholder的默认样式 */
:-moz-placeholder {
  color: #ddd;
  opacity: 1;
}
::-moz-placeholder {
  color: #ddd;
  opacity: 1;
}
input:-ms-input-placeholder {
  color: #ddd;
  opacity: 1;
}
input::-webkit-input-placeholder {
  color: #ddd;
  opacity: 1;
}
/* select标签 */
select {
  border: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  /*在选择框的最右侧中间显示小箭头图片*/
  background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat
    scroll right center transparent;
  padding-right: 14px;
}
/* 重置表格元素 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* 重置hr */
hr {
  border: none;
  height: 1px;
}
/* 清除< ol > < ul >的默认样式 */
ul ol {
  list-style: none;
}
/* .button按钮 */
.button {
  border: 0;
  background-color: none;
  outline: none;
  -webkit-appearance: none;
  /* 用于IOS下移除原生样式 */
}
/* < a >标签 */
a {
  text-decoration: none !important;
  color: #333;
}
/* < input >标签 */
input {
  border: none;
  appearance: none;
  -moz-appearance: none;
  outline: none;
  /* //input标签聚焦不出现默认边框: */
  -webkit-appearance: none;
  /* //用于IOS下移除原生样式 */
}
/* //or: */
input:focus {
  outline: none;
}
/* //input标签聚焦不出现默认边框: 
border: none;
appearance:none; 
-moz-appearance:none; outline:none; 
 //input标签聚焦不出现默认边框:  
 -webkit-appearance: no */
</style>
