<template>
  <div>
       <header-app></header-app>
       <bread-crumb></bread-crumb>
    <nuxt />
       <footer-app></footer-app>
  </div>
</template>
<script>
import footerApp from "~/components/layout/footerApp.vue";
import headerApp from "~/components/layout/headerApp.vue";
import breadCrumb from "~/components/layout/breadCrumb.vue";
export default {
  components: {
    'header-app':headerApp,
    'footer-app':footerApp,
    'bread-crumb':breadCrumb
  }
}
</script>
<style>

</style>
