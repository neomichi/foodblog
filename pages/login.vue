<template>
  <!-- About section -->
  <section class="about-section spad">
    <div class="container">
      <div class="row">
        <div class="d-block mx-auto">
          <div class="form-container">
            <form action="index.html" class="login-form">
              <h1 class="form-title">Войти в аккаунт</h1>

              <div class="group">
                <input type="text" required maxlength="40" />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Email</label>
              </div>

              <div class="group">
                <input type="password" required maxlength="40" />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Пароль</label>
              </div>
             <checkbox title="запомнить" ></checkbox>

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
import checkbox from "~/components/checkbox";
export default {
  components:{
    'checkbox':checkbox
  },
  data() {
    return {
      loginform: {
        email: '',
        password: '',
        moretime: false,
      },
      regform: {
        email: '',
        firstname: '',
        repassword: '',
        password: ''
      }
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
.group {
  position: relative;
  margin-bottom: 45px;
  
}

input {
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
  &:focus {
    outline: none;
  }
}

label {
  color: #999;

  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */

input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
}

/* BOTTOM BARS ================================= */

.bar {
  position: relative;
  display: block;
}

.bar:before,
.bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #f8e8ed;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

/* active state */

input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */

input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */

@-webkit-keyframes inputHighlighter {
  from {
    background: #f8cfdb;
  }
  to {
    width: 0;
    background: transparent;
  }
}

@-moz-keyframes inputHighlighter {
  from {
    background: #f8cfdb;
  }
  to {
    width: 0;
    background: transparent;
  }
}

@keyframes inputHighlighter {
  from {
    background: #f8cfdb;
  }
  to {
    width: 0;
    background: transparent;
  }
}

.logbtn {
  background-color: #ff2a6b;
  color: #fff;
  transition: 0.5s;
  cursor: pointer;
  margin-bottom: 30px;
  border-radius: 6 px;
  transition: 0.3s;
  &:hover {
    background-color: transparent;
    border: 2px solid #ff2a6b;
    color: #ff2a6b;
  }
}

.label-checkbox {
    cursor: pointer;
    display: inline;
    line-height: 1.25em;
    vertical-align: top;   
    padding-left: 1px;
}


</style>