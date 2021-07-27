<template>
  <div class="Upload">
    <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    >
  <el-button size="small" type="primary">导入本地</el-button>
 </el-upload>
  </div>
</template>

<script>
// @ is an alias to /src

export default ({
  name: 'Upload',
  data () {
    return {
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
    }
  },
  methods: {
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了${files.length}个文件，共选择了 ${files.length + fileList.length} 个文件`)
    }
  }
})
</script>

<style scoped>
  /* 头部样式 */
 .Upload .el-button {
      background-color:#909399;
      border-color:#909399
  }
  </style>
