<template>
<div class="container">
    <div class="d-block mx-auto">


        <div class="form col-sm-11 col-xs-11 col-lg-8 col-12 ">
            <h4 class="title">Cоздание ингредиента</h4>
            <form @submit.prevent="onSubmit">
                <div id="" class="imgContainer">
                    <img :src="form.icon" id="uploadImg" max-height="180" alt="иконка" aspect-ratio="1" class="grey lighten-2" />
                </div>
                <div style="margin:30px 0;">
                    <inputfile imageId="uploadImg" inputFileId="fileButton" />
                </div>
                <div>
                    <inputtext title="название" descr="form_lastname" :maxlength="60" rules="min:3|max:60" v-model="form.title"></inputtext>
                    <inputtext title="урл" descr="form_url" :maxlength="60" rules="min:3|max:60" v-model="form.url"></inputtext>
                    <matTextarea title="описание" descr="form_description" rules="min:3|max:200" v-model="form.description"></matTextarea>
                </div>
                <div>
                    <checkbox v-model="form.visible" title="видимость"></checkbox>

                </div>
                <div>
                    <matButton  title="добавить" />
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import checkbox from '~/components/form/checkbox'
import inputtext from '~/components/form/inputtext'
import inputfile from '~/components/form/inputfile'
import matButton from '~/components/form/matButton'
import matTextarea from '~/components/form/matTextarea'
import axios from 'axios';
export default {
    layout: "admin",
    components: {
        checkbox,
        inputtext,
        inputfile,
        matButton,
        matTextarea
    },
    data() {
        return {
            form: {
                id: '',
                title: 'огурец',
                url: '123123',
                description: '',
                icon: '',
                visible: false,
            }
        }
    },
    methods: {
   
        onSubmit() {
      
            this.$validator.validateAll().then(result => {
                    if (result) {
                        let token = "2";
                        let formData = ({}, this.form);
                        let src=document.getElementById('uploadImg').src;
                        formData.icon=src; 
                        
                        console.log(formData);
                     
                        // let resp = axios.get('/api/ingredient/all', {
                        //     headers: {
                        //         Authorization: 'Bearer ' + token
                        //     }
                        // }).then(ingredient => {
                        //     this.ingredients = ingredients.data;
                        // })
                        // console.log(this.$store);
                    }
                },

            )}

        },
    }
</script>
<style scoped>
.gg {
    width: 30;
}

h4.title {
    margin: 30px 0;
}

.form {
    border: 1px solid rgb(219, 219, 219);
    padding: 30px 15px;
    border-radius: 3px;
    background: #fff;
}

.imgContainer {
    height: 84px;
    width: 84px;
    border: 1px solid #000;
}

@media (min-width: 571px) {
    div#sidebar-wrapper {
        display: none;
    }
}
</style>