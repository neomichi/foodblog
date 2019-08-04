<template>
<!-- About section -->
<section class="about-section spad">
    <div class="container">
        <div class="row">
            <div class="d-block mx-auto">
                <div class="form-container">
                    <form action="#" class="login-form" @submit.prevent="onSubmit">
                        <h1 v-if="isLoginForm()" class="form-title">Войти в аккаунт</h1>
                        <h1 v-else class="form-title">Регистрация аккаунта</h1>
                        <inputtext title="email" descr="form_email" :maxlength="40" v-model="form.email" rules="required|min:3|max:40"></inputtext>
                        <inputtext v-if="!isLoginForm()" title="имя" descr="form_firstname" :maxlength="60" rules="min:3|max:60" v-model="form.firstname"></inputtext>
                        <inputtext v-if="!isLoginForm()" title="фамилия" descr="form_lastname" :maxlength="60" rules="min:3|max:60" v-model="form.lastname"></inputtext>

                        <inputtext type="password" title="пароль" descr="form_password" :maxlength="40" rules="required|min:3|max:40" v-model="form.password"></inputtext>
                        <inputtext v-if="!isLoginForm()" type="password" title="Пароль(еще раз)" descr="form_repassword" :maxlength="40" rules="required|min:3" v-model="form.repassword"></inputtext>

                        <checkbox v-if="isLoginForm()" v-model="form.remember" title="запомнить" id="remember"></checkbox>

                        <input v-if="isLoginForm()" v-on:submit.prevent="onSubmit()" type="submit" class="logbtn" value="войти" />
                        <input v-else v-on:submit.prevent="onSubmit()" type="submit" class="logbtn" value="сохранить" />

                        <div v-if="isLoginForm()" class="bottom-text">
                            нет аккаунта?
                            <a v-on:click="changeForm();" href>регистрация</a>
                        </div>
                        <div v-else class="bottom-text">
                            есть аккаунт?
                            <a v-on:click="changeForm();" href>войти</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- About section end -->
</template>
<script>
import checkbox from '~/components/form/checkbox'
import inputtext from '~/components/form/inputtext'
import axios from 'axios';
export default {
    components: {
        checkbox,
        inputtext
    },
    data() {
        return {
            form: {
                email: 'test@test.ru',
                password: '123123',
                remember: true,
                firstname: 'иван',
                repassword: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log(this.$store);
            this.$validator.validateAll().then(result => {
                if (result) {
                    let formData = ({}, this.form)
                    let userData = {}
                    userData.email = formData.email
                    userData.password = formData.password

                    if (this.isLoginForm()) {
                        userData.remember = formData.remember
                    } else {
                        userData.firstname = formData.firstname
                        userData.lastname = formData.lastname
                    }

                    let isLogin = this.isLoginForm() ? true : false;


                    this.formResult('userModule/UPDATE_USER', { form: isLogin, data: userData })

                    // var cb = this.$store.dispatch('userModule/UPDATE_USER', {form:isLogin,data:userData})
                    // console.log(cb);
                }

            })

        },
        isLoginForm() {
            return this.$nuxt.$route.name === 'login'
        },
        changeForm() {
            let routeName = this.isLoginForm() ? 'register' : 'login'
            return this.$router.push({ name: routeName })
        },
        async formResult(url, data) {
            const result = await this.$store.dispatch(url, data);
            console.log(result);
            return 0;
        },

    },
    mounted() {

        if (this.$route.query.access != undefined) {
            var message = "";
            this.returnUrl = this.$route.query.returnUrl
            if (this.$route.query.access == 'admin') {
                message = "пожалуйста, вы должны авторизоваться под ролью админитратора";
            } else
            if (this.$route.query.access == 'user') {
                message = "пожалуйста, вы должны авторизоваться";
            }
            this.$store.dispatch('SET_ERROR', message);

        }
    },
}
</script>
<style lang="scss" scoped>
.form-container {
    margin: 0 auto;
    width: 340px;
    padding: 0 20px;
}

.login-form {
    border: 1px solid #e4e4e4;
    padding: 20px 20px;
    border-radius: 10px;
    position: relative;
    transition: 0.5s;
    opacity: 0.8;
    text-align: center;
    &:hover,
    &:focus {
        border: 2px solid #d6d6d6;
        opacity: 1;
        -webkit-box-shadow: 0px 0px 42px 0px rgba(199, 199, 199, 1);
        -moz-box-shadow: 0px 0px 42px 0px rgba(199, 199, 199, 1);
        box-shadow: 0px 0px 42px 0px rgba(199, 199, 199, 1);
    }
}

.form-title {
    font-size: 24px;
    margin-bottom: 30px;
}

.logbtn {
    background-color: #ff2a6b;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
    margin-bottom: 30px;
    border-radius: 6px;
    transition: 0.3s;
    width: 100%;
    border: 0;
    padding: 10px 10px 10px 5px;
    &:hover {
        background-color: transparent;
        border: 2px solid #ff2a6b;
        color: #ff2a6b;
        padding: 8px 8px 8px 3px;
    }
}

.label-checkbox {
    cursor: pointer;
    display: inline;
    line-height: 1.25em;
    vertical-align: top;
    padding-left: 1px;
}

span.form-error {
    font-size: 12px;
}
</style>