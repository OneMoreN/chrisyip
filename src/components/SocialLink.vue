<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" id="button">
    <i :class="icon"></i> <h4 class="link-text">&nbsp;{{linkLabel}}</h4>
  </a>
</template>

<script>
export default {
  props: ['link', 'icon', 'linkLabel']
}
</script>
