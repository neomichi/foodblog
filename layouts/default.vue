<template>
  <div>
    <header-app></header-app>
    <bread-crumb></bread-crumb>
    <nuxt />
    <footer-app></footer-app>
     <loading
      :active.sync="isLoading"
      color="#020304"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></loading>
    {{isLoading}}
    {{showNotification}}
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
    'header-app': headerApp,
    'footer-app': footerApp,
    'bread-crumb': breadCrumb,
    Loading: Loading
  },
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
      var notification = this.$store.state.uiModule.notification;
      if (!helper.isNullOrEmpty(notification.text)) {
        console.log(notification);
        this.$notify({
          group: helper.isNullOrEmpty(notification.type)
            ? "info"
            : notification.type,
          type: helper.isNullOrEmpty(notification.type)
            ? "info"
            : notification.type,
          title: helper.isNullOrEmpty(notification.title)
            ? ""
            : notification.title,
          text: helper.isNullOrEmpty(notification.text) ? "" : notification.text
        });
        this.$store.dispatch("uiModule/UPDATE_NOTIFICATION", "");
      }

      return "";
    },
  },
  methods: {
    onCancel() {
      console.log("User cancelled the loader.");
    },
    onHide: store => {
      setTimeout(() => {
        if (store != undefined || store != null) {
          store.dispatch('uiModule/HIDE_LOADING')
        }        
      }, 5000)
    }
  }
}
</script>
<style>

</style>
