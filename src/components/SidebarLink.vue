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
      <div
        v-if="hover || firstPage"
        class="nav-text"
      >
        {{navText}}
      </div>
      <i
        :class="hover ? hoverFaIcon : faIcon"
      >
      </i>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    navText: String,
    faIcon: String,
    hoverFaIcon: String,
    route: String,
    hash: String
  },

  data () {
    return {
      hover: false,
      firstPage: true
    }
  }
}
</script>
