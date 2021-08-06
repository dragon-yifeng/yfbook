<template>
  <div class="OnlineBooks">
      <el-empty description="没有网络"></el-empty>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'OnlineBooks',
  components: {
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
    .OnlineBooks {
     width: auto;
     height: auto;
    }
</style>
