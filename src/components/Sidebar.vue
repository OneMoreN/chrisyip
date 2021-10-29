<template>
  <div class="sidebar d-flex">
    <SidebarLink
      :route="'Home'"
      :navText="'Home'"
      :faIcon="'fas fa-home'"
      :hoverFaIcon="'fas fa-home'"
      :hash="''"
    />
    <SidebarLink
      :route="'Home'"
      :hash="'#about-me'"
      :navText="'About&nbsp;Me'"
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
