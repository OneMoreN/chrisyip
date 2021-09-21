<template>
  <div id="topnav">
    <img class="logo" alt="CY" src="@/assets/logo.png">
  </div>
  <div class="sidebar">
    <SidebarLink
      :route="'/'"
      :navText="'Home'"
      :faIcon="'fas fa-home'"
      :hoverFaIcon="'fas fa-home'"
    />
    <SidebarLink
      :route="'/about'"
      :navText="'About'"
      :faIcon="'far fa-circle'"
      :hoverFaIcon="'fas fa-circle'"
    />
  </div>
  <router-view/>
</template>

<script>
import SidebarLink from '@/components/SidebarLink.vue'

export default {
  components: {
    SidebarLink
  },
  data () {
    return {
    }
  }
}
</script>
