<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" id="button">
    <i :class="icon"></i> <h3 class="landing-links-text">&nbsp;{{linkLabel}}</h3>
  </a>
</template>

<script>
export default {
  props: ['link', 'icon', 'linkLabel']
}
</script>
