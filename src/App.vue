<template>
  <div id="topnav">
    <router-link to="/">
      <img class="logo" alt="CY" src="@/assets/images/logo.png">
    </router-link>
  </div>
  <div class="sidebar d-flex">
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
