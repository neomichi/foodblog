<template>
<div class="search-input">
  <input type="text">
  <span class="highlight"></span>
  <span class="bar"></span>
  <label>Search here</label>
  <span class="glyphicon glyphicon-search"></span>
  <span class="glyphicon glyphicon-remove"></span>
</div>
</template>
<style lang="scss" scoped>
$primary-color: rgba(0,0,0,1);
$hint-color: rgba(0,0,0,.3);
$font-size: 16px;

body {
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


.search-input {
  position: relative;
  padding: 1rem 0 0.5rem 0;
  height: 4.5rem;
  width: 22.5rem;
}

.search-input input {
  border: none;
  border-bottom: 1px solid $primary-color;
  display: block;
  font-size: 1rem;
  line-height: 1rem;
  margin: 0;
  padding: 0.5rem 0;
  width: 100%;
  text-align: left; 
  background-color: transparent;
  color: $primary-color;
}

.search-input input:focus {
  outline: none;
}

.search-input label {
  position: absolute;
  left: 0;
  top: 1.625rem;
  width: 100%;
  color: $hint-color;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: normal;
  pointer-events: none;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.search-input input:focus ~ label {
  top: 0;
  font-size: 0.75rem;
  color: $primary-color;
}

.search-input label.not-empty {
  top: 0;
  font-size: 0.75rem;
}

.search-input span:nth-of-type(3) {
  position: absolute;
  color: $primary-color;
  left: 100%;
  top: 1.625rem;
  font-size: 1rem;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.search-input input:focus ~ span:nth-of-type(3) {
  left: -1.625rem;
  top: 1.625rem;
  color: $primary-color;
}

.search-input span:nth-of-type(3).not-empty {
  left: -1.625rem !important;
  top: 1.625rem !important;
}

.search-input span:nth-of-type(4) {
  position: absolute;
  color: $primary-color;
  right: 0;
  top: 1.625rem;
  font-size: 1rem;
  opacity: 0;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.search-input input:focus ~ span:nth-of-type(4) {
  color: $primary-color;
  opacity: 1;
  cursor: pointer;
}

.search-input span:nth-of-type(4).not-empty {
  opacity: 1 !important;
}

.search-input .bar {
  display: block;
  width: 0;
  margin-left: 50%;
  height: 1px;
  background: $primary-color;
  opacity: 0;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.search-input input:focus ~ .bar {
  opacity: 1;
  width: 100%;
  margin-left: 0;
}
</style>