<template>
  <div class="close-modal" :style="{opacity: modalOpacity}" @click="closeModal">
    <a style="cursor: pointer"><i class="fas fa-times fa-2x"></i></a>
  </div>

  <div class="work-modal">
    <div class="modal-content" data-aos="zoom-in">
      <img :src="getImgUrl(work[modalActive].image)" class="modal-image"/>
      <div class="job-title">{{work[modalActive].title}}</div>
      <div class="job-dates">
        {{work[modalActive].dates}}
      </div>
      <hr>
      <div class="job-description" v-html="work[modalActive].description">
      </div>
    </div>
  </div>

</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({
  data () {
    return {
      imgSrc: '@/assets/images/' + this.work[this.modalActive].image + '.png',
      modalOpacity: 0
    }
  },
  props: ['closeModal', 'work', 'modalActive'],
  mounted () {
    setTimeout(() => { this.modalOpacity = 1 }, 1)
  },
  created () {
    AOS.init()
    const onEscape = (e) => {
      if (e.keyCode === 27) {
        this.closeModal()
      }
    }
    document.addEventListener('keydown', onEscape)
  },
  beforeUnmount () {
    document.removeEventListener('keydown', this.onEscape)
  },
  methods: {
    getImgUrl (img) {
      var images = require.context('../assets/images/', false, /\.png$/)
      return images('./' + img + '.png')
    }
  }
})
</script>
