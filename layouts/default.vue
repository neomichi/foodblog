<template>
  <div>
       <header-app></header-app>
    <nuxt />
       <footer-app></footer-app>
  </div>
</template>
<script>
import footerApp from "~/components/layout/footerApp.vue";
import headerApp from "~/components/layout/headerApp.vue";
export default {
  components: {
    'header-app':headerApp,
    'footer-app':footerApp
  }
}
</script>
<style>

</style>
