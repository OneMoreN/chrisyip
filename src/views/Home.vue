<template>
  <div id="home">
    <Landing/>
  </div>
  <!-- <AboutMe/> -->
</template>

<script>
import Landing from '@/components/Landing.vue'
// import AboutMe from '@/components/AboutMe.vue'

export default {
  name: 'Home',
  components: {
    Landing
    // AboutMe
  }
}
</script>
