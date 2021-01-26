<template>
  <div class="sidebar">
    <ul>
      <router-link
        v-for="(item, index) in sidebarItems"
        :key="index"
        :to="{ name: item.route }"
        ><li :class="['py-3 pl-4', $route.name == item.route ? 'active' : '']">
          <font-awesome-icon :icon="item.icon" class="mr-4" />{{ item.title }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarItems: [
        {
          title: 'Overview',
          route: 'Home',
          icon: 'chart-pie',
        },
        {
          title: 'Patients',
          route: 'patients',
          icon: 'ticket-alt',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.sidebar {
  background-color: #363740;
  width: 255px;
  height: 100vh;

  ul {
    list-style: none;
    padding: 0;
    .active {
      background-color: rgba($color: #9fa2b4, $alpha: 0.08);
      border-left: 4px solid #dde2ff;
      border-radius: 2px 0px 0px 2px;
      a {
        color: #dde2ff !important;
      }
      svg {
        color: #dde2ff;
      }
    }
    li {
      transition: 0.2s;
      cursor: pointer;
      svg {
        color: #9fa2b4;
      }
    }
  }
  a {
    color: #a4a6b3;
    text-decoration: none !important;
  }
}
</style>
