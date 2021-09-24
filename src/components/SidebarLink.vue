<template>
  <div
    class="sidebar-item"
  >
    <router-link
      :to="route"
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
        :active="isActive"
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
    route: String
  },

  data () {
    return {
      isActive: false,
      hover: false,
      firstPage: true
    }
  }
}
</script>
