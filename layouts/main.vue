<template>
  <div id="main">
   <headerApp/>    
             
    <breadCrumb/>   
     <nuxt/>
     <footerApp/>
      <notificationInit/>
  </div>
</template>
<script>

import footerApp from '~/components/layout/footerApp.vue'
import headerApp from '~/components/layout/headerApp.vue'
import breadCrumb from '~/components/layout/breadCrumb.vue'
import notificationInit from '~/components/layout/notificationInit.vue'
import helper from '~/assets/js/helper'

export default {   
    components: { 
         headerApp,
         footerApp,
         breadCrumb,     
         notificationInit

    },
    layout: "default",
    data() {
          return {           
        }     
    },
    computed: {
       
    },
    methods: {
     
    }
}
</script>

<style>
</style>
