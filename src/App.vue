<template>
  <header id="topnav" ref="topnav" :class="{ 'onScroll': !pageTop}">
    <router-link to="/">
      <img class="logo" alt="CY" src="@/assets/images/logo.png">
    </router-link>

    <div class="nav-links">
      <router-link to="/contact-me" id="button">
        Contact Me <i class="fas fa-envelope"></i>
      </router-link>
    </div>
  </header>
  <Sidebar />

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
      prevScrollpos: window.pageYOffset,
      pageTop: true
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var currentScrollPos = window.pageYOffset
      if (this.prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
        this.$refs.topnav.classList.remove('scrolled-down')
        this.$refs.topnav.classList.add('scrolled-up')
      } else {
        this.$refs.topnav.classList.remove('scrolled-up')
        this.$refs.topnav.classList.add('scrolled-down')
      }

      if (currentScrollPos > 0) {
        this.pageTop = false
      } else {
        this.pageTop = true
      }

      this.prevScrollpos = currentScrollPos
    }
  }
}
</script>
