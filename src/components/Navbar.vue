<template>
  <div class="Navbar">
  <el-button :class="icon" v-model="isCollapse" plain @click="change"></el-button>
  <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect" :collapse="isCollapse">
  <el-menu-item index="1" >
    <i class="el-icon-menu"></i>
    <template #title>我的书架</template>
  </el-menu-item>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <template #title>网络书城</template>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <template #title>导航三</template>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <template #title>导航四</template>
  </el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isCollapse: false,
      icon: 'el-icon-s-fold'
    }
  },
  methods: {
    change () {
      this.isCollapse = !this.isCollapse
      if (this.icon === 'el-icon-s-fold') {
        this.icon = 'el-icon-s-unfold'
      } else {
        this.icon = 'el-icon-s-fold'
      }
    },
    handleSelect (key, keyPath) {
      console.log(key)
      this.$parent.showPath()
    }
  }
}
</script>

<style>
 /* 左侧样式 */
  .Navbar {
    position: absolute;
    width: 120px;
    top: 72px;  /* 距离上面50像素 */
    left: 0px;
    bottom: 0px;
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    background-color: #FFFFFF;
  }
  .Navbar .el-button {
    width: 35px;
    height: 35px;
    color: #909399;
    background: #FFFFFF;
    border: #FFFFFF;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 13px;
  }
  .Navbar .el-button.is-plain:hover {
    color: #909399;
    border: #FFFFFF;
    background-color: #FFFFFF;
  }
  .Navbar .el-button.is-plain:focus {
    color: #909399;
    border: #FFFFFF;
    background-color: #FFFFFF;
  }
  .Navbar .el-menu {
    border-right:0px;
  }
</style>
