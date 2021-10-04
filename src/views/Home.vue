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
  }
}
</script>
