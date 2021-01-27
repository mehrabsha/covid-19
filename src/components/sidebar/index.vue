<template>
  <div class="sidebar">
    <Logo />
    <ul>
      <router-link
        v-for="(item, index) in sidebarItems"
        :key="index"
        :event="item.route != '#' ? 'click' : ''"
        :to="{ name: item.route }"
        tag="div"
      >
        <hr v-if="item.title == 'hr'" />
        <li
          v-else
          :class="['py-3 pl-4', $route.name == item.route ? 'active' : '']"
        >
          <font-awesome-icon :icon="item.icon" class="mr-4" /><span
            class="pr-5 mr-4 d-none d-md-inline"
            >{{ item.title }}</span
          >
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Logo from './logo'
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
        {
          title: 'Link number2',
          route: '#',
          icon: 'lightbulb',
        },
        {
          title: 'Link number3',
          route: '#',
          icon: 'users',
        },
        {
          title: 'Link number4',
          route: '#',
          icon: 'user-tie',
        },
        {
          title: 'Link number5',
          route: '#',
          icon: 'book',
        },
        {
          title: 'hr',
        },
        {
          title: 'Settings',
          route: '#',
          icon: 'cog',
        },
        {
          title: 'Logout',
          route: '#',
          icon: 'award',
        },
      ],
    }
  },
  components: {
    Logo,
  },
}
</script>

<style lang="scss">
.sidebar {
  background-color: #363740;
  width: fit-content;
  height: 100vh;
  hr {
    background-color: #9fa2b4;
  }
  ul {
    list-style: none;
    padding: 0;
    .active {
      background-color: rgba($color: #9fa2b4, $alpha: 0.08);
      border-left: 4px solid rgba($color: #dde2ff, $alpha: 1);
      border-radius: 2px 0px 0px 2px;
      color: #dde2ff !important;
      svg {
        color: #dde2ff;
      }
    }
    li {
      border-left: 4px solid rgba($color: #dde2ff, $alpha: 0);
      transition: 0.2s;
      cursor: pointer;
      svg {
        color: #9fa2b4;
        width: 20px !important;
      }
    }
  }
  color: #a4a6b3;
}
</style>
