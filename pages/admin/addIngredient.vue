<template>
<div class="container">
    <div class="d-block mx-auto">
        <div class="form col-sm-11 col-xs-11 col-lg-8 col-12">
            <h4 class="title" v-text="isEdit()?'Редактирование ингредиента':'Создание ингредиента'"></h4>
            <form @submit.prevent="onSubmit">
                <div class="main_flex flex__jcontent_start">
                    <div v-for="(image,index) in form.images" :key="index" class="imgContainer static">
                        <img :src="image" class="img static" />
                        <span class="img-delete">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="trash"
                  class="svg-inline--fa fa-trash fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="red"
                    d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
                  />
                </svg>
              </span>
                    </div>
                    <div v-for="(img,index) in form.images64" :key="index+1000" class="imgContainer">
                        <img :src="img" class="img" />
                        <span class="img-delete">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="trash"
                  class="svg-inline--fa fa-trash fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="red"
                    d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
                  />
                </svg>
              </span>
                    </div>
                </div>
                <div style="margin:30px 0;">
                    <inputfile imageId="uploadImg" :count="3" inputFileId="fileButton" v-on:getArray="form.images64=$event" />
                </div>
                <!--- все возможно <div style="margin:30px 0;">
                    <inputtext v-for="(link,index) in urllinks" :key="index"  title="зарузка файла по урл" descr="url_preload" :maxlength="60" rules="min:3|max:60" v-model="urllinks"></inputtext>
          </div>-->
                <div>
                    <inputtext title="название" descr="form_lastname" :maxlength="60" rules="min:3|max:60" v-model="form.title"></inputtext>
                    <inputtext title="урл" descr="form_url" :maxlength="60" rules="min:3|max:60" v-model="form.url"></inputtext>
                    <matTextarea title="описание" descr="form_description" rules="min:3|max:200" v-model="form.description"></matTextarea>
                </div>
                <div>
                    <checkbox v-model="form.visible" title="видимость"></checkbox>
                </div>
                <div class="main_flex">
                    <matButton title="назад" />
                    <matButton title="сохранить" />
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
import helper from '~/assets/js/helper'
import VueLazyload from 'vue-lazyload'

import axios from 'axios'
export default {
    props: {
        title: { type: String, default: '' },
        id: { type: String, default: '' }
    },

    layout: 'admin',
    components: {
        checkbox,
        inputtext,
        inputfile,
        matButton,
        matTextarea
    },
    data() {
        return {
            urllinks: ['урл'],
            files: [],
            form: {
                id: '',
                title: '',
                url: '',
                description: '',
                images: [],
                images64: [],
                visible: false
            }
        }
    },
    methods: {
        onSubmit() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$store.dispatch('uiModule/SHOW_LOADING', true)

                    let token = '2'
                    let formData = ({}, this.form)
                    let headers = { Authorization: 'Bearer ' + token }

                    let methodType = this.isEdit() ? 'post' : 'put'

                    const request = axios({
                            method: methodType,
                            url: '/api/ingredient',
                            header: headers,
                            data: formData
                        })
                        .then(resp => {
                            status
                            if (resp.status == 200) {
                                this.form.images64 = [];


                                let backImg = this.addWebPath(resp.data.imagesStatic);
                                let clientImg = this.form.images;

                                console.log(backImg);
                                console.log(clientImg);
                                let newImages = helper.GetDifferensTwoArray(backImg, clientImg);
                                console.log(newImages);
                                if (newImages.length > 0)

                                    for (let img of newImages) {
                                        console.log(img);
                                        this.form.images.push(img);
                                    }



                                this.$store.dispatch('uiModule/UPDATE_NOTIFICATION_SUCCESS', {
                                    title: 'успех',
                                    text: 'обновленно'
                                })
                            } else {
                                this.$store.dispatch('uiModule/UPDATE_NOTIFICATION_ERROR', {
                                    title: 'ошибка',
                                    text: 'ошибка'
                                })
                            }
                            this.$store.dispatch('uiModule/HIDE_LOADING')
                        })
                        .catch(error => {
                            this.$store.dispatch('uiModule/UPDATE_NOTIFICATION_ERROR', {
                                title: 'ошибка',
                                text: 'ошибка'
                            })
                        })
                }
            })
        },
        getImage(imageURL) {
            console.log(imageURL)
            return require(imageURL)
        },

        isEdit() {
            return this.$nuxt.$route.name === 'admin-editIngredient'
        },
        GetIngredient() {
            if (!helper.isNullOrEmpty(this.id)) {
                let token = '2'
                let resp = axios
                    .get('/api/ingredient/id?val=' + this.id, {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    })
                    .then(result => {
                        this.form = result.data;
                        this.form.images = this.addWebPath(result.data.imagesStatic);
                    });
            }
        },
        addWebPath(imgdata) {
            let path = '/upload/ingredient/'
            return imgdata.map(x => path + x);
        }
    },
    mounted() {
        this.GetIngredient()
    }
}
</script>
<style lang="scss" scoped>
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
    margin-top: 30px;
}

.imgContainer {
    height: 84px;
    border: 1px solid #000;
    margin-right: 30px;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 4px;
    position: relative;
}

.img {
    max-width: 100%;
    max-height: 100%;
}

.img-delete {
    position: absolute;
    left: 44%;
    top: 36%;
    cursor: pointer;
    opacity: 1;
    transition: 0.5s;
    z-index: 1;
    &:hover {
        z-index: 2;
        opacity: 100%;
        transform: scale(1.5);
    }
}

@media (min-width: 571px) {
    div#sidebar-wrapper {
        display: none;
    }
}
</style>