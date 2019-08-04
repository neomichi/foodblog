<template>
  <div>
    <!-- Search section -->
    <div class="search-form-section">
      <div class="sf-warp">
        <div class="container">
          <form class="big-search-form">
            <select>
              <option>All Recipes Categories</option>
              <option>Pizza</option>
              <option>Salads</option>
              <option>Desserts</option>
              <option>Side Dishes</option>
            </select>
            <select>
              <option>All Ingredients</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </select>
            <input type="text" placeholder="Search Receipies" />
            <button class="bsf-btn">Search</button>
          </form>
        </div>
      </div>
    </div>
    <!-- Search section end -->

    <!-- About section -->
    <section class="about-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 about-text">
            <h2>About our great team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magni. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magni.</p>
            <div class="site-btn">Read more</div>
          </div>
          <div class="col-lg-6">
            <img src="img/about.jpg" alt />
          </div>
        </div>
      </div>
    </section>
    <!-- About section end -->

    <!-- Facts section -->
    <section class="facts-section">
      <div class="facts-warp">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6 fact-item">
              <div class="fact-icon">
                <img src="img/icon/1.png" alt />
              </div>
              <h2>1287</h2>
              <p>Amazing receipies</p>
            </div>
            <div class="col-lg-3 col-sm-6 fact-item">
              <div class="fact-icon">
                <img src="img/icon/2.png" alt />
              </div>
              <h2>25</h2>
              <p>Wine pairings</p>
            </div>
            <div class="col-lg-3 col-sm-6 fact-item">
              <div class="fact-icon">
                <img src="img/icon/3.png" alt />
              </div>
              <h2>471</h2>
              <p>Meat receipies</p>
            </div>
            <div class="col-lg-3 col-sm-6 fact-item">
              <div class="fact-icon">
                <img src="img/icon/4.png" alt />
              </div>
              <h2>326</h2>
              <p>Desert receipies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Facts section end -->

    <!-- Newsletter section -->
    <section class="newsletter-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 nl-text">
            <h2>Subscribe to our newsletter</h2>
            <form class="newsletter-form">
              <input type="text" placeholder="Your E-mail" />
              <button class="site-btn">Subscribe</button>
            </form>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim.</p>
          </div>
          <div class="col-lg-6">
            <img class="nl-sp-img" src="img/newslatter.png" alt />
          </div>
        </div>
      </div>
    </section>
    <!-- Newsletter section end -->

    <!-- Gallery section -->
    <div class="gallery">
      <div class="gallery-slider owl-carousel main_flex__nowrap">       
        <div class="gallery-img"><img src="~assets/img/instagram/1.jpg"/></div>
        <div class="gallery-img"><img src="~assets/img/instagram/2.jpg"/></div>
        <div class="gallery-img"><img src="~assets/img/instagram/3.jpg"/></div>
        <div class="gallery-img"><img src="~assets/img/instagram/4.jpg"/></div>
        <div class="gallery-img"><img src="~assets/img/instagram/5.jpg"/></div>
        <div class="gallery-img"><img src="~assets/img/instagram/6.jpg"/></div>
      </div>
    </div>
    <!-- Gallery section end -->
  </div>
</template>

<script>


export default {
   asyncData (context) {
    // called every time before loading the component
    // as the name said, it can be async
    // Also, the returned object will be merged with your data object
    return { name: 'main' }
  },
    layout: "main",
  data() {
    return {
      breadCrumb:'home',	  
	} 
  },
  mounted() {	   
    this.$store.dispatch("uiModule/UPDATE_BreadCrumb",this.breadCrumb);  
  }
}
</script>

<style>
.gs-item.set-bg {
  max-width: 400px;
  width: 400px;
}
.gallery-slider gs-item {
   width: 401px;
}
</style>
