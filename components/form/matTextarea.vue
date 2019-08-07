<template>
<div class="form__group">
  <textarea  
      required
      :maxlength="200"
      :data-vv-as="title"
      :data-vv-name="descr"
      v-validate="rules"
      :id="descr"
      class="form__field"
      :name="descr"
      :value="value"    
      v-on:input="$emit('input', $event.target.value)"
      rows="2" cols="3"></textarea>
  <label for="message" class="form__label">{{title}}</label>
</div>
</template>
<script>
export default {
  props: {   
    descr: { type: String, default: 'form_email' },
    rules: { type: String, default: 'required' },
    maxlength: { type: Number, default: 200 },
    title: {type: String, default: 'form_email' },
    value: { type: String, default: '' },
  }, 
}
</script>
<style scoped>

.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #d2d2d2;
  outline: 0;
  font-size: 16px;
  color: #212121;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}

.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
  font-size: 16px;
  cursor: text;
  top: 20px;
}

label,
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: #9b9b9b;
}

.form__field:focus ~ .form__label {
  color: #c7cfce;
}

.form__field:focus {
  padding-bottom: 6px;
  border-bottom: 2px solid #a8aaaa;
}
</style>