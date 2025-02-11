<template>
  <WorkModal v-if="modalActive!==false" :closeModal="closeModal" :work="work" :modalActive="modalActive"/>
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
import Hero from '@/components/Hero.vue'
import AboutMe from '@/components/AboutMe.vue'
import Work from '@/components/Work.vue'
import WorkModal from '@/components/WorkModal.vue'

export default {
  name: 'Home',
  components: {
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
        description: `<ul>
          <li>Delivered network automation software (Cisco NSO, Cisco BPA)</li>
          <li>Wrote automation scripts to perform day to day operations (Python, Bash, Jenkins Groovy)</li>
          <li>Up-skilled a wide range of customer stakeholders. Presented product demos to senior managers, conducted training sessions to technical staff</li>
          <li>Worked with clients as the technical point of contact, to gather requirementsand demonstrate benefits and effectiveness of the solution.</li>
        </ul>`
      },
      {
        image: 'Americold',
        title: 'Graduate Developer',
        dates: 'December 2020 - January 2022',
        description: `<ul>
          <li>Working on improving the in-house WMS using AS400, LANSA RDML language</li>
          <li>Building new reporting and CRUD functions</li>
          <li>Troubleshoot and fix existing bugs</li>
          <li>Performing first-hand support for after hour incidents</li>
        </ul>`
      },
      {
        image: 'TheGamesmen',
        title: 'Website Administrator',
        dates: 'April 2020 – December 2020',
        description: `<ul>
          <li>Maintained webpages for product listings</li>
          <li>Added new product listings</li>
          <li>Discovered a lot of boardgames and cardgames!</li>
        </ul>`
      },
      {
        image: 'SchoolPad',
        title: 'IT Intern',
        dates: 'January 2019 - March 2019',
        description: `<ul>
          <li>Researched UI/UX for the Core SchoolPad product</li>
          <li>Presented research to the Computer Society of India</li>
          <li>Created wireframes for new UI/UX designs</li>
        </ul>`
      }]
    }
  },
  props: ['menuActive', 'menuChangeScreen', 'scrollPos'],
  mounted () {
    // console.log(document.querySelectorAll('section'))
    if (this.menuActive) this.menuChangeScreen()
  },
  methods: {
    openModal (position) {
      this.modalActive = position
    },
    closeModal () {
      this.modalActive = false
    }
  }
}
</script>
