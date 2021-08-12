const nuxtPageCache = require('nuxt-page-cache')

module.exports = {
  mode: "universal",
  telemetry: false,
  env: {
    baseUrl: process.env.root
  },
  server: {

  },
  /*`
   ** Headers of the page
   */
  head: {
    title: "极客猿梦导航-专注独立开发者的导航站",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "keyword", name: "description", content: "极客猿梦导航,导航站" },
      {
        hid: "description",
        name: "description",
        content: "专注独立开发者的导航站"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_552690_njqotmfk5k.css"
      }
    ],
    script: [
      {
        src: "//v1.cnzz.com/z_stat.php?id=1279139494&web_id=1279139494",
        defer: "defer"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css", "@/static/styles/style.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui", "@/plugins/vue-inject"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy: true, // 表示开启代理
    credentials: true // 表示跨域请求时是否需要使用凭证
  },

  proxy: {
    '/api': {
      target: 'http://localhost:3002/api', // 目标接口域名
      changeOrigin: true,
      pathRewrite: {
        '^/api' : '/'
      }
    },
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    vendor: ["axios"]
  },

  // serverMiddleware: [
  //   nuxtPageCache.cacheSeconds(1, req => {
  //     if (req.query && req.query.pageType) {
  //       return req.query.pageType
  //     }
  //     return false
  //   })
  // ]
}
