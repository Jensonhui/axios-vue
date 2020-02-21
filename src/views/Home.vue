<template>
  <div class="home">
    <h2>Vue</h2>
    <ul>
      <li v-for="(item, index) in list" :key="item.id + index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import {ApiGetIndexList} from '@/common/requestApi'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getDataList()
  },
  methods: {
    async getDataList () {
      const res = await ApiGetIndexList({
        page : 1,
        tab: 'good',
        limit: 10,
        mdrender: false
      })
      this.list = res
    }
  },
}
</script>
