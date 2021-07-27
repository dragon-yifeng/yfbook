<template>
<div class="BaseFrame">
  <div class="header">
    <img class="logo" :src="`${publicPath}book.png`" alt="books">
     <div class="right">
      <span class="el-icon-minus icon" title="最小化" @click="minimizeWin"></span>
      <span class="el-icon-copy-document icon" title="最大化"  @click="maximizeWin"></span>
      <span class="el-icon-close icon" title="关闭" @click="closeWin"></span>
     </div>
  </div>
</div>
</template>

<script>
// var remote = window.require('electron').ipcRenderer.remote
// const remote = window.require('electron').ipcRenderer.remote
const { remote } = window.require('electron')
const win = remote.getCurrentWindow()
export default {
  name: 'BaseFrame',
  //   props: {
  //     msg: String
  //   }
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    minimizeWin () {
      win.minimize() // 窗口最小化
    },
    maximizeWin () {
      if (win.isMaximized()) { // 判断 窗口是否已最大化
        win.restore()// 恢复原窗口大小
      } else {
        win.maximize() // 最大化窗口
      }
    },
    closeWin () {
      // ipcRenderer.send('close');
      win.close() // 关闭窗口，也结束了所有进程
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right{
    /* 自定义元素上添加此样式否自无法操作 */
        float: right;
        margin-top: 6px;
        -webkit-app-region: no-drag
    }
    .right .icon:hover{
        color: rgb(151, 243, 235);;
    }
    .header{
        /* 添加此样式 */
    height:30px;
    background-color: #F1F3F4;
    -webkit-app-region: drag;
    }
    .logo{
        float: left;
        width: 30px;
    }
    span{
     margin-right: 10px;
    }
</style>
