<template>
  <div class="Bookshelf">
      <el-empty description="没有书籍"></el-empty>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Bookshelf',
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
    .Bookshelf {
     width: auto;
     height: auto;
    }
  </style>
