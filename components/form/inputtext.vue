<template>
  <div class="group">
    <input
      :type="type"
      required
      :maxlength="40"
      :data-vv-as="title"
      :data-vv-name="descr"
      v-validate="rules"
      :id="descr"
      :name="descr"
    />
    <span class="highlight"></span>
    <span class="bar"></span>
    <label :class="error">{{title}}</label>
    <span
      :v-show="errors.has(descr)"
      :class="{'text-danger form-error':errors.has(descr)}  "
    >{{ errors.first(descr) }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    descr: { type: String, default: 'form_email' },
    rules: { type: String, default: 'required' },
    maxlength: { type: Number, default: 160 },
    type:{ type: String, default: 'text' },
  },
  data() {
    return {
      initialTitle: this.title,
      error: "{'text-danger':errors.has('" + this.descr + "')}",
      errorShow: '',
      errorFirst: ''
      
    }
  }
}
</script>
<style scoped>
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
</style>