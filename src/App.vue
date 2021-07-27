<template>
<BaseFrame></BaseFrame>
  <div id="App">
    <Home></Home>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BaseFrame from './components/BaseFrame.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    BaseFrame,
    Home
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
