<template>
<button type="submit"  onclick="$emit('button',$event.target.button)" :class="color" ><span>{{title}}</span></button>
</template>
<script>
export default {
  props: {
    title: { type: String, default: 'this is button' },
    color: {type:String, default:'btn red'}
  },
  data() {
    return {
      
    }
   }, 
}
</script>
<style lang="scss" scoped>
$md-color:#ff2a6b;
.btn {
  position: relative;
  display: block;
  margin: 30px auto;
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;  
  border-radius: 4px;
  border:2px solid $md-color;  
  background-color: $md-color;
  color: white;
  line-height: 40px;
  transition: 0.5s;
  transition: background-color .3s;
}

.btn:hover, .btn:focus {
  background-color: #27ae60;
}

.btn > * {
  position: relative;
}

.btn span {
  display: block;
  padding: 3px 34px;
}

.btn:before {
  content: "";
  
  position: absolute;
  top: 50%;
  left: 50%;
  
  display: block;
  width: 0;
  padding-top: 0;
    
  border-radius: 100%;
  
  background-color: rgba(236, 240, 241, .3);
  
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btn:active:before {
  width: 120%;
  padding-top: 120%;
  
  transition: width .2s ease-out, padding-top .2s ease-out;
}

/* Styles, not important */
*, *:before, *:after {
  box-sizing: border-box;
}

html {
  position: relative;
  height: 100%;
}

body {
  position: absolute;
  top: 50%;
  left: 50%;
  
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  
  background-color: #ecf0f1;
  color: #34495e;
  text-align: center;
}

h2 {
  font-weight: normal;
}
.btn.red {
  background-color: $md-color;
}

.btn.red:hover, .btn.red:focus {
  color: #888;
  border-color: $md-color;
  background-color: transparent;
}
</style>