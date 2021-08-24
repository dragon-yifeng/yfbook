<template>
  <BaseFrame></BaseFrame>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BaseFrame from './components/BaseFrame.vue'
import file from './filesOption.js'
const { remote, ipcRenderer } = window.require('electron')
var json = require('../public/config.json')

export default {
  name: 'App',
  components: {
    // HelloWorld
    BaseFrame
  },
  created: function () {
    console.log(json)
    var path = json.path
    if (path === '') {
      console.log('当config中路径为空的时候')
      const configDir = remote.app.getPath('userData')
      var pathString = configDir + '\\books\\config'
      ipcRenderer.send('createFiles', pathString)
      const params = {}// 先声明一个对象
      // 首先拿到这个数组，并且循环这个数组
      params.path = pathString
      ipcRenderer.send('writeFile', JSON.stringify(params), './public/config.json')
    }
    // file.mkdirs(remote.app.getPath('userData') + '/books/config', function () { })
    // this.$axios.get('/list/product').then(function (response) {
    //   console.log(response.data.data.name)
    // }).catch(function () {
    //   console.log(Error)
    // })
    // this.$axios({
    //   url: '/list/product',
    //   method: 'get',
    //   params: {
    //     id: '11111',
    //     name: '22222'
    //   }
    // }).then(function (response) {
    //   console.log(response)
    // }).catch(function () {
    //   console.log(Error)
    // })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
