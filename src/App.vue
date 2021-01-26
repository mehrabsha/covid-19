<template>
  <div class="app">
    <sidebar />
    <router-view />
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
export default {
  components: { sidebar },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap');
html,
body {
  font-family: Mulish !important;
  font-size: 16px !important;
}
.app {
  display: flex;
}
</style>
