<template>
  <div class="close-modal" :style="{opacity: modalOpacity}" @click="closeModal"></div>

  <div class="work-modal">
    <div class="modal-content">
      <img src="@/assets/images/Americold_logo1.png" class="modal-image"/>
      <div class="job-title">Graduate Developer</div>
      <div class="job-dates">
        December 2020 - Current
      </div>
      <div class="job-description">
        <ul>
          <li>Working on improving the in-house WMS using AS400, LANSA RDML language</li>
          <li>Building new reporting and CRUD functions</li>
          <li>Analysing code to find and fix existing bugs</li>
          <li>Performing firsthand support for after hour incidents</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default ({
  data () {
    return {
      modalOpacity: 0
    }
  },
  props: ['closeModal'],
  mounted () {
    setTimeout(() => { this.modalOpacity = 1 }, 1)
  }
})
</script>
