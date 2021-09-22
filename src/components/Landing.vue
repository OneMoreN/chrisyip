<template>
  <div class="landing d-flex">
    <div class="landing-left">
      <img :src="landingImg"/>
    </div>
    <div class="landing-right">
      <div class="landing-text">
        <div class="tag"><h1>H E L L O !</h1></div>
        <div class="tag">my name is</div>
        <div class="name"><h1>Christopher Yip</h1></div>
        <div class="tag">I'm a <b>Software Developer</b></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      landingImg: require('@/assets/images/landingImage.svg')
    }
  }
}
</script>
