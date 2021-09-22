<template>
  <div class="landing d-flex">
    <div class="landing-image">
      <img :src="landingImg"/>
    </div>
    <div class="landing-tag d-flex">
      <div class="landing-text">
        <div class="tag"><h1>H E L L O !</h1></div>
        <div class="tag">my name is</div>
        <div class="name"><h1>Christopher Yip</h1></div>
        <div class="tag">I'm a <b>Software Developer</b></div>
      </div>
    </div>
  </div>
  <div class="landing-links d-flex">
    <div class="landing-links-container d-flex">
      <LandingLink
        :link="'https://www.linkedin.com/in/christopheryipeio'"
        :icon="'fab fa-linkedin landing-links-icon'"
        :linkLabel="'LinkedIn'"
      />
      <LandingLink
        :link="'https://github.com/OneMoreN'"
        :icon="'fab fa-github-square landing-links-icon'"
        :linkLabel="'GitHub'"
      />
    </div>
    <div class="landing-links-container d-flex m-b-10">
      <a :href="pdfLink" download="download" class="d-flex">
        <i class="far fa-file-pdf"></i> <h3 class="landing-links-text">&nbsp;Download my resume</h3>
      </a>
    </div>
  </div>
</template>

<script>
import LandingLink from '@/components/LandingLink.vue'

export default {
  components: {
    LandingLink
  },
  data () {
    return {
      landingImg: require('@/assets/images/landingImage.svg'),
      pdfLink: require('@/assets/Testing.pdf')
    }
  }
}
</script>
