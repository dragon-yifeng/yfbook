<template>
<BaseFrame></BaseFrame>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BaseFrame from './components/BaseFrame.vue'
const { remote } = window.require('electron')
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
      const configDir = remote.app.getPath('userData')
      console.log(configDir)
    }
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
