<template>

  <h1>Work Experience</h1>

  <div class="work-container">
    <WorkCard v-for="(work, index) in work" :key="index" :openModal="openModal" data-aos="zoom-in-up">
      <div class="work-card-image-container">
        <img :src="getImgUrl(work.image)" :alt="work.image" class="work-card-image"/>
      </div>
      <div class="work-card-title">{{work.title}}</div>
      <div class="work-card-dates">
        {{work.dates}}
      </div>
    </WorkCard>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import WorkCard from './WorkCard.vue'

export default ({
  components: {
    WorkCard
  },
  props: ['openModal', 'work'],
  created () {
    // console.log(this.work)
    AOS.init()
  },
  methods: {
    getImgUrl (img) {
      var images = require.context('../assets/images/', false, /\.png$/)
      return images('./' + img + '.png')
    }
  }
})
</script>
