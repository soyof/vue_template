<template>
  <router-view
    ref="cur"
    class="child-route"
    :class="{'has-child':hasChild}"
  />
</template>

<script>
export default {
  data() {
    return {
      hasChild: false
    }
  },
  watch: {
    $route(to, from) {
      if (to.matched.length > this.initRoute) {
        if (this.$refs.cur) {
          this.hasChild = to.matched.length > this.initRoute + 1
        }
      } else {
        this.hasChild = false
      }
    }
  },
  mounted() {
    this.hasChild = this.$route.matched.length > this.initRoute + 1
  }
}
</script>
