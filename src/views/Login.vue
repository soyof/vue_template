<template>
  <div class="login" @click="login">
    登录
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {}
  },
  methods: {
    login() {
      this.$store.dispatch('getIsLogin').then(() => {
        this.$router.push('/', onComplete => { }, onAbort => { })
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
