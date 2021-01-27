<template>
  <div class="navbar p-0">
    <h5 class="title ">{{ title }}</h5>
    <div class="user">
      <div class="icons d-none d-sm-inline">
        <font-awesome-icon icon="bell" />
        <font-awesome-icon class="ml-4" icon="search" />
      </div>
      <span class="d-none d-lg-inline">Jones Ferdinand</span>
      <b-avatar
        class="ml-3"
        variant="info"
        :src="require('@/assets/img/avatar.jpg')"
      ></b-avatar>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  .title {
    font-weight: bold;
    font-size: 1rem;
  }
  .user {
    display: flex;
    align-items: center;
    span {
      font-weight: 700;
    }
    .icons {
      margin-right: 35px;
      padding-right: 35px;
      border-right: 1px solid #dfe0eb;
      color: #c5c7cd !important;
      svg {
        cursor: pointer;
      }
    }
  }
}
</style>
