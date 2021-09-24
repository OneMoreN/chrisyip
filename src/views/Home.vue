<template>
  <div class="home">
    <Landing/>
    <!-- <AboutMe/> -->
  </div>
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
