<template>
  <div class="container-fluid bgcolor">
    <div class="row">
      <link href="~/assets/css/bootstrap.min.css" ref="stylesheet" />
      <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Start admin</div>

        <div class="list-group list-group-flush">
          <nuxt-link
            active-class="is-active"
            class="list-group-item list-group-item-action bg-light"
            :to="{ name: 'admin'}"
          >главная</nuxt-link>
        </div>
        <div class="list-group list-group-flush">
          <nuxt-link
            active-class="is-active"
            class="list-group-item list-group-item-action bg-light"
            :to="{ name: 'admin-users'}"
          >Список пользователей</nuxt-link>
        </div>

        <div class="list-group list-group-flush">
          <nuxt-link
            active-class="is-active"
            class="list-group-item list-group-item-action bg-light"
            :to="{ name: 'admin-recipies'}"
          >Список рецептов</nuxt-link>
        </div>

        <div class="list-group list-group-flush">
          <nuxt-link
            active-class="is-active"
            class="list-group-item list-group-item-action bg-light"
            :to="{ name: 'admin-ingredients'}"
          >Список ингридиентов</nuxt-link>
        </div>

        <div class="list-group list-group-flush">
          <nuxt-link
            active-class="is-active"
            class="list-group-item list-group-item-action bg-light"
            :to="{ name: 'admin-messages'}"
          >Список сообщений</nuxt-link>
        </div>
      </div>

      <div class="col-8">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
    overflow-x: hidden;
    
}
.bgcolor {
  background: rgb(222, 226, 230);
}
.is-active {
    background: #000;
}

.list-group-flush {
    color: red;
    background-color: red;
}

#sidebar-wrapper {
    min-height: 100vh;
    margin-left: -15rem;
    transition: margin .25s ease-out;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
    padding: .875rem 1.25rem;
    font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
    width: 15rem;
}

#page-content-wrapper {
    min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
    margin-left: 0;
}

@media (min-width: 768px) {
    #sidebar-wrapper {
        margin-left: 0;
    }
    #page-content-wrapper {
        width: 100%;
        min-width: 0;
    }
    #wrapper.toggled #sidebar-wrapper {
        margin-left: -15rem;
    }
}
</style>