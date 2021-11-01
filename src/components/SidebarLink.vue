<template>
  <div
    class="sidebar-item"
  >
    <router-link
      :to="{name: route, hash: hash}"
      class="faNav"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <span
        class="nav-text"
      >
        {{navText}}
      </span>
      <i :class="hover ? hoverFaIcon : faIcon"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
    'navText',
    'faIcon',
    'hoverFaIcon',
    'route',
    'hash'
  ],
  data () {
    return {
      hover: false
    }
  }
}
</script>
