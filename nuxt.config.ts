import { Configuration } from '@nuxt/types'
import { Configuration as WebpackConfiguration } from 'webpack'
import i18n from './nuxt-i18n.config'
const webpack = require('webpack')
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')
const environment = process.env.NODE_ENV || 'development'

const config: Configuration = {
  // mode: 'universal',
  target: 'static',
  /*
   ** Environments
   */
  env: {
    lastupdateUrl:
      process.env.LASTUPDATE_URL ||
      'https://nishidayoshikatsu.github.io/covid19-yamaguchi-opendata/last_update.json',
    newsUrl:
      process.env.NEWS_URL ||
      'https://nishidayoshikatsu.github.io/covid19-yamaguchi-opendata/news.json',
    patientscntUrl:
      process.env.PATIENTSCNT_URL ||
      'https://nishidayoshikatsu.github.io/covid19-yamaguchi-opendata/patients_cnt.json',
    patientsUrl:
      process.env.PATIENTS_URL ||
      'https://nishidayoshikatsu.github.io/covid19-yamaguchi-opendata/patients.json',
    inspectionsUrl:
      process.env.INSPECTIONS_URL ||
      'https://nishidayoshikatsu.github.io/covid19-yamaguchi-opendata/inspections_person.json',
    hospitalizationsUrl:
      process.env.HOSPITALIZATIONS_URL ||
      'https://nishidayoshikatsu.github.io/covid19-yamaguchi-opendata/hospitalizations.json',
    querentsUrl:
      process.env.QUERENTS_URL ||
      'https://nishidayoshikatsu.github.io/covid19-yamaguchi-opendata/querents.json',
    mapupdateUrl:
      process.env.QUERENTS_URL ||
      'https://nishidayoshikatsu.github.io/covid19-yamaguchi-opendata/map_update.json'
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://yamaguchi.stopcovid19.jp/'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@nsd244'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@nsd244'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '2879625188795443'
      },
      {
        hid: 'note:card',
        property: 'note:card',
        content: 'summary_large_image'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css'
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
  css: ['~assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/vue-chart.ts',
      ssr: true
    },
    {
      src: '@/plugins/axe',
      ssr: true
    },
    {
      src: '@/plugins/vuetify.ts',
      ssr: true
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: `.env.${environment}` }],
    ['nuxt-i18n', i18n],
    'nuxt-svg-loader',
    'nuxt-purgecss',
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { duration: 1000, offset: -72 }],
    'nuxt-client-init-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      icons: false
    }
  },
  googleAnalytics: {
    id: 'UA-161156836-1'
  },
  optionalCookies: [
    {
      name: 'i18n_redirected',
      label: 'i18n Redirection Cookie',
      description:
        'For automatically switching UI languages in accordance with locale preferences in the web browser configuration.',
      cookies: ['i18n_redirected']
    }
  ],
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl'
      })
    ],
    postcss: {
      plugins: [
        autoprefixer({ grid: 'autoplace' }),
        purgecss({
          content: [
            './pages/**/*.vue',
            './layouts/**/*.vue',
            './components/**/*.vue',
            './node_modules/vuetify/dist/vuetify.js',
            './node_modules/vue-spinner/src/ScaleLoader.vue'
          ],
          whitelist: ['html', 'body', 'nuxt-progress', 'DataCard'],
          whitelistPatterns: [/(col|row)/]
        })
      ]
    },
    extend(config: WebpackConfiguration, _) {
      // default externals option is undefined
      config.externals = [{ moment: 'moment' }]
    }
    // https://ja.nuxtjs.org/api/configuration-build/#hardsource
    // hardSource: process.env.NODE_ENV === 'development'
  },
  manifest: {
    name: '山口県公認 新型コロナウイルス感染症対策サイト',
    theme_color: '#00a63c',
    background_color: '#ffffff',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
    splash_pages: null
  },
  generate: {
    fallback: true,
    routes() {
      // const locales = ['ja', 'en', 'zh-cn', 'zh-tw', 'ko', 'ja-basic']
      const locales = ['ja', 'en']
      const pages = [
        '/cards/details-of-confirmed-cases',
        '/cards/number-of-confirmed-cases',
        '/cards/attributes-of-confirmed-cases',
        '/cards/number-of-tested',
        '/cards/number-of-reports-to-covid19-consultation-desk',
        '/cards/map-in-yamaguchi'
      ]

      const routes: string[] = []
      locales.forEach(locale => {
        pages.forEach(page => {
          if (locale === 'ja') {
            routes.push(page)
            return
          }
          const route = `/${locale}${page}`
          routes.push(route)
        })
      })
      return routes
    }
  },
  // /*
  // ** hot read configuration for docker
  // */
  watchers: {
    webpack: {
      poll: true
    }
  }
}

export default config
