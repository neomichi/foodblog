<template>
<div class="container">
    <div class="d-block mx-auto">
        <h4 class="title">Cоздание ингредиента</h4>
        
        <div class="form col-sm-6 col-xs-7 col-8 ">
            <form  @submit.prevent="onSubmit">
                <inputtext title="название" descr="form_lastname" :maxlength="60" rules="min:3|max:60" v-model="form.title"></inputtext>
                <inputtext title="урл" descr="form_url" :maxlength="60" rules="min:3|max:60" v-model="form.url"></inputtext>
            </form>
        </div>
    </div> 
</div>
</template>

<script>
import checkbox from '~/components/form/checkbox'
import inputtext from '~/components/form/inputtext'
import axios from 'axios';
export default {
    layout: "admin",
    components: {
        checkbox,
        inputtext
    },
    data() {
        return {
            form: {
                id:1,
                title: 'огурец',
                url: '123123',
                icon: '',
                visible: 'иван',            
            }
        }
    },
    methods: {
        onSubmit() {
            console.log(this.$store);
          
        }
    },
}
</script>
<style>
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

</style>