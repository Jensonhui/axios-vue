<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {}
  },
  created () {
    this.expressFoo()
  },
  methods: {
    async expressFoo () {
      try {
        const res = await this.$post(this.$url.about.detail, {}, {
          isLoading: false
        })
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
