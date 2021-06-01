<template>
  <div class="home">
    <img width="300px" height="300px" src="/api/file/preview/47" alt="">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/about">About</router-link> |
    <router-link to="/404">404</router-link>
    <tinymce-vue-h />
  </div>
</template>

<script>
import TinymceVueH from 'tinymce-vue-h'
export default {
  name: 'Home',
  components: {
    TinymceVueH
  }
}
</script>
