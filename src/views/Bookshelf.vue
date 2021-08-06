<template>
  <div class="Bookshelf">
      <!-- <el-empty description="没有书籍"></el-empty> -->
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
      <div style="height:120px; width:100px ;background:red;margin:10px;float: left"></div>
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
     position: absolute;
     /* width: 500px; */
     /* display: flex;
     height: auto; */
     overflow-x: auto;
    }
  </style>
