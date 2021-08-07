export default {
  ssr: false,
  target: 'static',

  /*
  ** Headers of the page
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],

  js: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
    }
  },

  generate: {
    fallback: true
  },

  sitemap: {
    hostname: 'https://navidk0.dev'
  },

  ignore: [
    '**/_*.html',
    '**/*.scss'
  ]
};
