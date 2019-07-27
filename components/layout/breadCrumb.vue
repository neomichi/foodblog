<template>
  <!-- Hero section -->
  <section class="page-top-section set-bg" data-setbg="img/page-top-bg.jpg">

    <div v-if="hideBreadcrumb" class="container">      
      <h2> {{crumbText}}</h2>   
    </div>
  </section>
  <!-- Hero section end -->
</template>
<script>
import helper from '~/assets/js/helper'
export default {
  data() {
    return {
      version: 1
    }
  },
  computed: {
     crumbText() {     
     return this.$store.state.ui.breadCrumb;
	 },
    hideBreadcrumb() {
       return !helper.isNullOrEmpty(this.$store.state.ui.breadCrumb) ? true : false;
    }
   }
}
</script>