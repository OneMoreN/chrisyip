<template>
  <header id="topnav">
    <router-link to="/">
      <img class="logo" alt="CY" src="@/assets/images/logo.png">
    </router-link>

    <div class="nav-links">
      <router-link to="/contact-me" id="button">
        Contact Me <i class="fas fa-envelope"></i>
      </router-link>
    </div>
    <Sidebar />
  </header>

  <router-view/>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  data () {
    return {
    }
  }
}
</script>
