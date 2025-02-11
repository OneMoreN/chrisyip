<template>
    <div class="hero">
        <div class="hero-content" data-aos="zoom-in">
            <div>Hello! My name is</div>
            <h1>Christopher Yip</h1>
            <div>I'm a <b>Software Engineer</b><br>
            Based in Sydney, Australia
            </div>

            <div class="hero-links d-flex">
                <SocialLink
                    :link="'https://www.linkedin.com/in/christopheryipeio'"
                    :icon="'fab fa-linkedin'"
                    :linkLabel="'LinkedIn'"
                />
                <SocialLink
                    :link="'https://github.com/OneMoreN'"
                    :icon="'fab fa-github-square'"
                    :linkLabel="'GitHub'"
                />
                <!-- <a :href="pdfLink" download="Christopher_Yip" id="button">
                    <i class="far fa-file-pdf"></i> <h4 class="link-text">&nbsp;Download my resume</h4>
                </a> -->
            </div>
        </div>

        <router-link
            :to="{ name: 'Home', hash: '#about-me' }"
        >
            <div class="arrows"></div>
        </router-link>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import SocialLink from '@/components/SocialLink.vue'

export default {
  components: {
    SocialLink
  },
  data () {
    return {
      pdfLink: require('@/assets/Christopher_Yip.pdf')
    }
  },
  created () {
    AOS.init()
  }
}
</script>
