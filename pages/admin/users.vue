<template>
<div>

    <table  class="table table-bordered table-hover ">
        <thead>
            <tr>
                <th>Аватар</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Email</th>
                <th>Роль</th>
                <th>Забанен</th>
                <th>Создан</th>               
                <th>Забанить</th>
                <th>Удалить</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>
                    <div class="imgContainer"><img :src="user.avatarUrl" alt="avatar" class="img_max" /></div>
                </td>
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.email}}</td>
                <td>{{user.role}}</td>
                <td>{{user.banned}}</td>
                <td>{{user.created}}</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>

</template>
<script>
import axios from 'axios'
export default {
    layout: "admin",
    data() {
        return {
            users: []
        }
    },
    computed: {

    },
    methods: {
        GetUsers() {
            let token = "2";
            let resp = axios.get('/api/user/all', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(user => {                
                this.users = user.data;

            })
        }
    },
    mounted() {
        this.GetUsers();
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