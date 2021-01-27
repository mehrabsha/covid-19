<template>
  <div class="logo pt-3 pt-sm-5 mb-3 mb-sm-5">
    <img src="@/assets/img/logo.png" alt="" />
    <h5 :class="['ml-3 mb-0', isOpen ? 'd-inline' : 'd-none d-lg-inline']">
      Covid 19 Tracker
    </h5>
  </div>
</template>

<script>
export default {
  props: ['isOpen'],
}
</script>

<style lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  h5 {
    font-weight: bold !important;
    font-size: 0.9rem !important;
  }
}
</style>
