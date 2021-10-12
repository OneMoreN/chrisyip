<template>
  <div class="landing d-flex">
    <div class="landing-image">
      <img :src="landingImg"/>
    </div>
    <div class="landing-tag d-flex">
      <div class="landing-text">
        <div class="tag"><h2>H E L L O !</h2></div>
        <div class="tag">my name is</div>
        <div class="name"><h1>Christopher Yip</h1></div>
        <div class="tag">I'm a <h2 class="d-inline">Software Developer</h2></div>
      </div>
    </div>
  </div>
  <div class="landing-links d-flex">
    <div class="landing-links-container d-flex">
      <SocialLink
        :link="'https://www.linkedin.com/in/christopheryipeio'"
        :icon="'fab fa-linkedin landing-links-icon'"
        :linkLabel="'LinkedIn'"
      />
      <SocialLink
        :link="'https://github.com/OneMoreN'"
        :icon="'fab fa-github-square landing-links-icon'"
        :linkLabel="'GitHub'"
      />
    </div>
    <div class="landing-links-container d-flex m-b-10">
      <a :href="pdfLink" download="Christopher_Yip" class="d-flex" id="button">
        <i class="far fa-file-pdf"></i> <h3 class="landing-links-text">&nbsp;Download my resume</h3>
      </a>
    </div>
  </div>
  <router-link
    :to="{ name: 'Home', hash: '#about-me' }"
  >
    <div class="arrows"></div>
  </router-link>
</template>

<script>
import SocialLink from '@/components/SocialLink.vue'

export default {
  components: {
    SocialLink
  },
  data () {
    return {
      landingImg: require('@/assets/images/landingImage.svg'),
      pdfLink: require('@/assets/Christopher_Yip.pdf')
    }
  }
}
</script>
