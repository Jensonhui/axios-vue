<template>
  <div class="home">
    <img src="../assets/logo.png" alt="">
    <router-link to="/Mine">Mine</router-link>
    <ul>
        <li v-for="(item, index) in list" :key="item.id + index">{{item.title}}</li>
      </ul>
  </div>
</template>

<script>
import {ApiGetIndexList} from '@/common/requestApi/home'
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
    // 获取首页列表数据
    async getDataList () {
      try {
        const res = await ApiGetIndexList({
          page : 1,
          tab: 'good',
          limit: 10,
          mdrender: false
        })
        this.list = res
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>