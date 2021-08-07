export default {
  ssr: false,
  target: 'static',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: "NavidK0's Neat Place",
    meta: [
      { charset: 'utf-8' },
      {
        name: 'author',
        content: 'Navid Kabir'
      },

      {
        hid: 'description',
        name: 'description',
        content: 'Code, music, and video games are the key to something'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'navid kabir, developer, personal, website'
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow'
      },
      {
        name: 'language',
        content: 'English'
      },

      // Open graph
      {
        property: "og:url",
        content: "https://navidk0.dev/"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:title",
        content: "NavidK0's Neat Place"
      },
      {
        property: "og:description",
        content: "Code, music, and video games are the key to something"
      },

      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        property: "twitter:domain",
        content: "navidk0.dev"
      },
      {
        property: "twitter:url",
        content: "https://navidk0.dev"
      },
      {
        name: "twitter:title",
        content: "NavidK0's Neat Place"
      },
      {
        name: "twitter:description",
        content: "Code, music, and video games are the key to something"
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico'
      }
    ]
  },
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
