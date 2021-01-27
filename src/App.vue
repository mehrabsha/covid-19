<template>
  <b-row class="app">
    <b-col class="pr-0" cols="auto"> <sidebar /></b-col>
    <b-col class="pl-0 content"><router-view class="p-2 p-md-4"/></b-col>
  </b-row>
</template>

<script>
import sidebar from '@/components/sidebar'
export default {
  components: { sidebar },
  mounted() {
    window.addEventListener('resize', this.setContentSize)
    this.setContentSize()
  },
  methods: {
    setContentSize() {
      console.log(document.querySelector('.content').style.marginLeft)
      document.querySelector('.content').style.marginLeft =
        document.querySelector('.sidebar').clientWidth + 'px'
    },
  },
  watch: {
    $route() {
      this.setContentSize()
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700&display=swap');
html,
body {
  font-family: Mulish !important;
  font-size: 16px !important;
  overflow-x: hidden;
  background-color: #f7f8fc;
}
.app {
  flex-wrap: nowrap;
}
</style>
