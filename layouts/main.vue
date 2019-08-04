<template>
  <div id="main">
   <headerApp/>    
             
    <breadCrumb/>   
     <nuxt/>
     <footerApp/>
     <loading :active.sync="isLoading" color="#020304" :can-cancel="false" :on-cancel="onCancel" :is-full-page="fullPage"></loading>
     <notifications group="error" type="error" /> {{showNotification}}
  </div>
</template>
<script>

import footerApp from '~/components/layout/footerApp.vue'
import headerApp from '~/components/layout/headerApp.vue'
import breadCrumb from '~/components/layout/breadCrumb.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import helper from '~/assets/js/helper'

export default {   
    components: { 
         headerApp,
         footerApp,
         breadCrumb,     
         Loading
    },
    layout: "default",
    data() {
          return {
            fullPage: true
        }     
    },
    computed: {
        isLoading() {
            if (this.$store.state.uiModule.loading) {
                this.onHide(this.$store)
            }
            return this.$store.state.uiModule.loading
        },
        showNotification() {
            var notification = this.$store.state.uiModule.notification

            if (!helper.isNullOrEmpty(notification)) {
                if (helper.isNullOrEmpty(notification.type)) notification.type = 'warn'
                this.$notify({
                    group: 'error',
                    type: notification.type,
                    title: notification.title,
                    text: notification.text
                })
                this.$store.dispatch('uiModule/CLEAR_NOTIFICATION')
            }
            return ''
        }
    },
    methods: {
     onCancel() {
            console.log('User cancelled the loader.')
        },
        onHide: store => {
            setTimeout(() => {
                if (store != undefined || store != null) {
                    store.dispatch('uiModule/HIDE_LOADING')
                }
            }, 15000)
        }
    }
}
</script>

<style>
</style>
