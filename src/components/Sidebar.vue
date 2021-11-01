<template>
  <div class="sidebar d-flex">
    <SidebarLink
      v-for="link in links"
      :key="link.navText"
      :route="link.route"
      :hash="link.hash"
      :navText="link.navText"
      :faIcon="link.faIcon"
      :hoverFaIcon="link.hoverFaIcon"
    />
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'

export default {
  components: {
    SidebarLink
  },
  data () {
    return {
      links: [{
        route: 'Home',
        hash: '',
        navText: 'Home',
        faIcon: 'fas fa-home',
        hoverFaIcon: 'fas fa-home'
      },
      {
        route: 'Home',
        hash: '#about-me',
        navText: 'About Me',
        faIcon: 'far fa-user',
        hoverFaIcon: 'fas fa-user'
      }]
    }
  }
}
</script>
