<template>
<div class="container-fluid">
    <div class="row">
        <div class="form">

            <table class="table table-bordered table-hover ">
                <thead>
                    <tr>

                        <th>Название</th>
                        <th>Url</th>
                        <th>Описание</th>
                        <th>Видимось</th>
                        <th>Изменить</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ingredient in ingredients" :key="ingredient.id">
                        <td>{{ingredient.title}}</td>
                        <td>{{ingredient.url}}</td>
                        <td>{{ingredient.description}}</td>
                        <td>{{ingredient.visible}}</td>
                        <td>

                            <nuxt-link :to="{ name: 'admin-editIngredient',params:{id:ingredient.id}}" class="btn btn-info">Изменить</nuxt-link>
                        </td>
                        <td>
                            <nuxt-link :to="{ name: 'admin-editIngredient'}" class="btn btn-danger">Удалить</nuxt-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <nuxt-link :to="{ name: 'admin-addIngredient' }" class="btn btn-info">Создать</nuxt-link>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    layout: "admin",
    data() {
        return {
            ingredients: []
        }
    },
    computed: {
        getData() {

        }
    },
    methods: {
        GetIngredients() {
            let token = "2";
            let resp = axios.get('/api/ingredient/all', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(result => {
                console.log(result.data);
                this.ingredients = result.data;
            })
        }
    },
    mounted() {
        this.GetIngredients();
    }


}
</script>
<style scoped>
.form {
    border: 1px solid rgb(219, 219, 219);
    padding: 30px 15px;
    border-radius: 3px;
    background: #fff;
    margin-top: 30px;
    width: 100%;
}

.imgContainer {
    width: 64px;
}

.img_max {
    max-width: 100%;
    min-width: 100%;
}
</style>