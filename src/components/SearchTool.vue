<template>
  <div class="SearchTool">
  <el-autocomplete
  popper-class="my-autocomplete"
  v-model="state"
  :fetch-suggestions="querySearch"
  placeholder="请输入内容"
  @select="handleSelect"
  >
  <template #suffix>
    <i class="el-icon-search el-input__icon" @click="search"> </i>
    <!-- <el-button type="primary" @click="search">搜索</el-button> -->
  </template>
  <template #default="{ item }">
    <div class="name">{{ item.value }}</div>
    <span class="addr">{{ item.address }}</span>
  </template>
</el-autocomplete>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'SearchTool',
  setup () {
    const restaurants = ref([])

    const querySearch = (queryString, cb) => {
      var results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value
      // 调用 callback 返回建议列表的数据
      cb(results)
    }
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    }
    const loadAll = () => {
      return [
        { value: '阳阳麻辣烫', address: '天山西路389号' },
        {
          value: '南拳妈妈龙虾盖浇饭',
          address: '普陀区金沙江路1699号鑫乐惠美食广场A13'
        }
      ]
    }
    const handleSelect = (item) => {
      console.log(item)
    }
    const search = (ev) => {
      console.log('搜索')
    }
    onMounted(() => {
      restaurants.value = loadAll()
    })

    return {
      restaurants,
      state: ref(''),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
      search
    }
  }
})
</script>

<style scoped>
  /* 头部样式 */
 ::v-deep .el-input__inner {
          height: 32px;
          width: 180px;
          background-color: #F1F3F4;
          border: 0px;
        }
  </style>
