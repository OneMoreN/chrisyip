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
      :mobileSidebar="mobileSidebar"
    />
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'

export default {
  components: {
    SidebarLink
  },
  props: ['mobileSidebar'],
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
        faIcon: 'far fa-circle',
        hoverFaIcon: 'fas fa-circle'
      }]
    }
  }
}
</script>
