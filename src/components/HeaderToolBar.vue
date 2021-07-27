<template>
  <div class="HeaderToolBar">
    <SearchTool class="search"></SearchTool>
    <Upload class="upload"></Upload>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchTool from '@/components/SearchTool.vue'
import Upload from '@/components/Upload.vue'

export default ({
  name: 'HeaderToolBar',
  components: {
    SearchTool,
    Upload
  }
})
</script>

<style scoped>
  /* 头部样式 */
  .HeaderToolBar {
    position: absolute;
    line-height: 40px;
    top: 32px;
    left: 0px;
    right: 0px;
    background-color: #ffffff;
    display: flex;
  }
  .search {
    margin:auto ;
  }
  .upload {
    margin-right: 20px;
  }
  </style>
