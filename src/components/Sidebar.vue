<template>
  <div class="sidebar d-flex">
    <SidebarLink
      :route="'/'"
      :navText="'Home'"
      :faIcon="'fas fa-home'"
      :hoverFaIcon="'fas fa-home'"
    />
    <SidebarLink
      :route="'/contact-me'"
      :navText="'About'"
      :faIcon="'far fa-circle'"
      :hoverFaIcon="'fas fa-circle'"
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
    }
  }
}
</script>
