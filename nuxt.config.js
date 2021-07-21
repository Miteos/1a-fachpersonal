import colors from 'vuetify/es5/util/colors'
import env from './env'

export default {
  mode: 'universal',
  env: env.env,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - 1a-fachpersonal',
    title: '1a-fachpersonal',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '1A – Fachpersonal – Ihr Personalvermittler\n' +
          '\n' +
          'Gemeinsam finden wir die passenden Talente für Sie. Wir vermitteln Fach- und Führungskräfte sowie Freiberufler seit über 10 Jahren weltweit. Großes Kandidatennetzwerk. Hohe Flexibilität. Fachliche Kompetenz. Personalisierte Betreuung.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/styles.scss'],
  styleResources: ['~assets/styles.scss'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }, '@/plugins/aos.client'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components/'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-178132958-2',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      'nuxt-mail',
      {
        message: {
          to: 'matej.kapular@gmail.com',
        },
        smtp: {
          host: 'smtp.mailtrap.io',
          port: 2525,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: env.apiUrl,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#003D7E',
          secondary: '#ffffff',
          secondary_grey: '#A7AABD',
          secondary_darker_grey: '#737687',
          tertiary: '#771930',
          accent: '#B04E5E',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
