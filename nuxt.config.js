export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  styleResources: {
    scss: ['./assets/sass/main.scss']
  },
  css: [
    '~/assets/css/bootstrap.css',    
    '~/assets/sass/main.scss'
  ],

  plugins: ['~plugins/vue-loading-overlay', 
  '~/plugins/vue-notifications',
  '~/plugins/vee-validate',
  // '~/plugins/isUnique',
  {src:'~/plugins/vue-displacement-slideshow',mode:'client'},

],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-validate', { lang: 'ru' }], 
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
       {
         set: '@fortawesome/free-solid-svg-icons',
         icons: ['fas']
       },
       {
         set:'@fortawesome/free-brands-svg-icons',
         icons: ['fab']
       }
     ]}],     
     ['@nuxtjs/proxy', {
      proxy: {
        // Simple proxy
        '/api': 'http://localhost:5000',
      }
    }]
  ],
  proxy: {
    // proxy for server api
   '/api': 'http://localhost:5000',
 },
  router: {
    //middleware: ['routeHandler'],
    extendRoutes (routes, resolve) {
   
      routes.push(
        { name: 'register', path: '/register', component: 'pages/login.vue' },
        { name: 'adminIndex', path: '/admin/index', component: 'pages/admin/index.vue' },
        { name: 'adminRecipies', path: '/admin/recipies', component: resolve(__dirname, 'pages/admin/recipies.vue')},
        { name: 'custom', path: '*',  component: resolve(__dirname, 'pages/404.vue') }
      )
    }
    
    // routes: [
    //   {
    //     name: 'index',
    //     path: '/',
    //     component: 'pages/index.vue'
    //   },
    // ]
  
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    transpile: ['vue-notifications'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    minify: true,
  },
  minify: {
    collapseWhitespace: false,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true
  }
}
