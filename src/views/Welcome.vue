<template>
  <div class="Welcome">
    <img alt="yfbook logo" src="../assets/logo.png">
  </div>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Welcome',
  components: {
    // HelloWorld
  },
  props: {
    msg: String
  }
}
</script>
