<template>
<div>
    
    <table class="table table-bordered table-hover ">
        <thead>
            <tr>
                <th>Id</th> 
                <th>Название</th>
                <th>Url</th>
                <th>Иконка</th>
                <th>Описание</th>
                <th>Видимось</th>                
                <th>Изменить</th>               
                <th>Удалить</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="ingredient in ingredients" :key="ingredient.id">
                <td>
                    <div class="imgContainer"><img :src="ingredient.icon" alt="avatar" class="img_max" /></div>
                </td>
                  <td>{{ingredient.id}}</td>
                <td>{{ingredient.title}}</td>               
                <td>{{ingredient.url}}</td>
                <td>{{ingredient.description}}</td>
                <td>{{ingredient.visible}}</td>     
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <div>
        <nuxt-link :to="{ name: 'admin-addIngredient'}" class="btn btn-info" >Создать</nuxt-link>
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

    },
    methods: {
        GetIngredients() {
            let token = "2";
            let resp = axios.get('/api/ingredient/all', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(ingredient => {
                this.ingredients = ingredients.data;
            })
        }
    },
    mounted() {
        this.GetIngredients();
    }


}
</script>
<style scoped>
.imgContainer {
    width: 64px;
}

.img_max {
    max-width: 100%;
    min-width: 100%;
}
</style>