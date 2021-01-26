<template>
  <div>
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
