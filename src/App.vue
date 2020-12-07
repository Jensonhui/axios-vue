<template>
  <div id="app">
    <router-link to="/about">关于我们</router-link>
    <router-link to="/">首页</router-link>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  text-align: center;
}
a {
  display: inline-block;
  color: #42b983;
  margin: 30px 10px;
}
</style>
