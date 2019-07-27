<template>
    <vue-displacement-slideshow 
            :images="images"
            displacement="require('/assets/displacement.png')"
            intensity.number="0.2"
            speedIn.number="1.4"
            speedOut.number="1.4"
            
            ease="Expo.easeInOut"
            ref="slideshow"></vue-displacement-slideshow>
</template>
<script>
    import VueDisplacementSlideshow from "vue-displacement-slideshow";
    
    export default {
      
        components: {
            VueDisplacementSlideshow,
            preserveAspectRatio:true,
        },
        computed: {
            images() {
                return [
                    require("~/assets/img/instagram/1.jpg"),
                    require("~/assets/img/instagram/2.jpg"),
                    require("~/assets/img/instagram/3.jpg")
                ];
            }
        },
        methods: {
            init() {
                //We loop through all our images by calling the 'next' method of our component every 2 seconds
                setInterval(() => {
                    this.$refs.slideshow.next();
                }, 2000);
            }
        },
        mounted() {
            this.init();
        }
    };
</script>