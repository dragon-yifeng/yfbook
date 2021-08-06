<template>
  <div class="home">
    <div>
      <HeaderToolBar></HeaderToolBar>
      <Navbar></Navbar>
      <div class="main" ref="main"><router-view></router-view></div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderToolBar from '@/components/HeaderToolBar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    HeaderToolBar,
    Navbar
  },
  methods: {
    showPath (path) {
      this.$router.push({ path: path[0] })
    }
  }
}
</script>

<style scoped>
  /* 主区域 */
  .main {
    position: absolute;
    top: 72px;
    left: 120px;
    bottom: 0px;
    right: 0px;  /* 距离右边0像素 */
    padding: 10px;
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    /* background-color: red; */
  }
  </style>
