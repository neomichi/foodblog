<template>
<header class="header-section">
		<div class="header-top">
			<div class="container">
				<div class="header-social">
					<a href="#"><i class="fa fa-pinterest"></i></a>
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-dribbble"></i></a>
					<a href="#"><i class="fa fa-behance"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
<!-- 
    <font-awesome-icon :icon="['fab', 'linkedin']"/>
    <font-awesome-icon :icon="['fab', 'github']"/>
    <font-awesome-icon :icon="['fab', 'facebook']"/>
    <font-awesome-icon :icon="['fas', 'comment']"/> -->
	
				</div>
				<div class="user-panel">
					<a href="#">Register</a> / 
					<a href="#">Login</a>
				</div>
			</div>
		</div>
		<div class="header-bottom">
			<div class="container">
				<nuxt-link :to="{name:'index'}" class="site-logo">
					<img src="img/logo.png" alt="logo">
				</nuxt-link>
				<div class="nav-switch">
					<i class="fa fa-bars"></i>
				</div>
				<div class="header-search">
					<a href="#"><i class="fa fa-search"></i></a>
				</div>
				<ul class="main-menu">
					<li><a href="index.html">Home</a></li>
					<li><a href="about.html">Features</a></li>
					<li><a href="recipes.html">Receipies</a></li>
					<li><a href="#">Reviews</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</div>
		</div>
	</header>
</template>
<script>




import helper from "~/assets/js/helper"
export default {

    computed: {
		
	},
	mounted() {
		helper.ShowBgImages();
	}
  }
</script>