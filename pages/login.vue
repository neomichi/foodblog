<template>
  <!-- About section -->
  <section class="about-section spad">
    <div class="container">
      <div class="row">
        <div class="d-block mx-auto">
          <div class="form-container">
            <form action="#" class="login-form" @submit.prevent="onSubmit">
              <h1 v-if="islogin" class="form-title">Войти в аккаунт</h1>
              <h1 v-else class="form-title">Регистрация аккаунта</h1>
              <inputtext title="email" descr="form_email" :maxlength="40" rules="required|min:3"></inputtext>
              <inputtext
                v-if="!islogin"
                title="имя"
                descr="form_firstname"
                :maxlength="40"
                rules="required|min:3"
              ></inputtext>
              <inputtext
                type="password"
                title="пароль"
                descr="form_password"
                :maxlength="40"
                rules="required|min:3"
              ></inputtext>
              <inputtext
                v-if="!islogin"
                type="password"
                title="Пароль(еще раз)"
                descr="form_repassword"
                :maxlength="40"
                rules="required|min:3"
              ></inputtext>

              <checkbox v-if="islogin" title="запомнить" id="remember"></checkbox>

              <input type="submit" class="logbtn" value="войти" />

              <div class="bottom-text">
                нет аккаунта?
                <a href="#">регистрация</a>
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
export default {
  components: {
    checkbox,
    inputtext
  },
  data() {
    return {
      islogin: true,
      form: {
        email: 'test@test.ru',
        password: '123123',
        remember: false,
        firstname: 'иван',
        repassword: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        console.log('true')
        console.log(this.$validator)
      })
      console.log('onSubmit')
    }
  }
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
  border-radius: 6 px;
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