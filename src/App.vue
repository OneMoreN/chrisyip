<template>

  <div class="hamburger">
    <input type="checkbox" name="" id="" v-model="menuActive">
    <div class="hamburger-lines">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
  </div>

  <div class="mainContent" :class="menuActive ? 'menuActive' : ''">
    <header id="topnav" ref="topnav"
      :class="[{
          'onScroll': !pageTop
        },
        scrollDown ? 'scrolled-down' : 'scrolled-up'
        ]"
    >
      <router-link to="/">
        <img class="logo" alt="CY" src="@/assets/images/logo.png">
      </router-link>

      <div class="nav-links">
        <router-link to="/contact-me" id="button">
          Contact Me <i class="fas fa-envelope"></i>
        </router-link>
      </div>
    </header>

    <div class="close-sidebar" :class="{ 'active' : menuActive }" @click="menuActive = false"></div>
    <Sidebar :class="{ 'active' : menuActive }"/>
    <router-view :menuActive="menuActive" :menuChangeScreen="menuChangeScreen"/>
  </div>
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
      pageTop: true,
      menuActive: false,
      scrollDown: false
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    menuChangeScreen () {
      this.menuActive = false
    },
    handleScroll () {
      var currentScrollPos = window.pageYOffset
      if (this.prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
        this.scrollDown = false
      } else {
        this.scrollDown = true
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
