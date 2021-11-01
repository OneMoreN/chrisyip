<template>
  <WorkModal v-if="modalActive" :closeModal="closeModal"/>
  <section id="home">
    <Landing/>
  </section>
  <section id="about-me">
    <AboutMe :openModal="openModal" />
  </section>
</template>

<script>
import Landing from '@/components/Landing.vue'
import AboutMe from '@/components/AboutMe.vue'
import WorkModal from '@/components/WorkModal.vue'

export default {
  name: 'Home',
  components: {
    Landing,
    AboutMe,
    WorkModal
  },
  data () {
    return {
      modalActive: false
    }
  },
  props: ['menuActive', 'menuChangeScreen', 'scrollPos'],
  mounted () {
    // console.log(document.querySelectorAll('section'))
    if (this.menuActive) this.menuChangeScreen()
  },
  methods: {
    openModal (position) {
      this.modalActive = true
    },
    closeModal () {
      this.modalActive = false
    }
  }
}
</script>
