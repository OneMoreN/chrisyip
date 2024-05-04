<template>
  <WorkModal v-if="modalActive" :closeModal="closeModal" :work="work"/>
  <section id="home">
    <!-- <Landing/> -->
    <Hero />
  </section>
  <section id="about-me">
    <AboutMe :openModal="openModal" />
  </section>
  <section id="work">
    <Work :openModal="openModal" :work="work"/>
  </section>
</template>

<script>
// import Landing from '@/components/Landing.vue'
import Hero from '@/components/Hero.vue'
import AboutMe from '@/components/AboutMe.vue'
import Work from '@/components/Work.vue'
import WorkModal from '@/components/WorkModal.vue'

export default {
  name: 'Home',
  components: {
    // Landing,
    Hero,
    AboutMe,
    WorkModal,
    Work
  },
  data () {
    return {
      modalActive: false,
      work: [{
        image: 'Cisco',
        title: 'Software Consulting Engineer',
        dates: 'January 2022 - Current',
        description: 'Cisco hello world!'
      },
      {
        image: 'Americold',
        title: 'Graduate Developer',
        dates: 'December 2020 - January 2022',
        description: `<ul>
          <li>Working on improving the in-house WMS using AS400, LANSA RDML language</li>
          <li>Building new reporting and CRUD functions</li>
          <li>Analysing code to troubleshoot existing bugs</li>
          <li>Performing firsthand support for after hour incidents</li>
        </ul>`
      },
      {
        image: 'TheGamesmen',
        title: 'Website Administrator',
        dates: 'April 2020 – December 2020',
        description: 'The Gamesmen hello world'
      },
      {
        image: 'SchoolPad',
        title: 'IT Intern',
        dates: 'January 2019 - March 2019',
        description: 'SchoolPad hello world'
      }
      ]
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
