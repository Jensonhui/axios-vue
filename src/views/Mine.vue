<template>
   <div class="mine-box">
       <h3>{{tittle}}</h3>
   </div>
</template>

<script>
import ApiGetMineInfo from '@/common/requestApi/mine'
export default {
   nname: 'mine',
   props: {},
   components: {},
   data() {
       return {
           tittle: 'Hello, welcome to my github !'
       };
    },
   computed: {},
   created() {},
   mounted() {},
   methods: {
       // 获取我的详情
       async getMineInfo () {
           try {
               const res = await ApiGetMineInfo({loginname: 'Jasonhui'})
               console.log(res);
           } catch (error) {
               console.log(error);
           }
       }
   },
   watch: {},
};
</script>

<style lang='stylus' scoped>

</style>
