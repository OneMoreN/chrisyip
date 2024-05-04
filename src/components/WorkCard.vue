<template>
  <div class="work-card" @click="openModal">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: ['openModal']
}
</script>
