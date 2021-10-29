<template>
  <section id="home">
    <Landing/>
  </section>
  <section id="about-me">
    <AboutMe/>
  </section>
</template>

<script>
import Landing from '@/components/Landing.vue'
import AboutMe from '@/components/AboutMe.vue'

export default {
  name: 'Home',
  components: {
    Landing,
    AboutMe
  },
  props: ['menuActive', 'menuChangeScreen'],
  mounted () {
    console.log(document.querySelectorAll('section'))
    if (this.menuActive) this.menuChangeScreen()
  }
}
</script>
