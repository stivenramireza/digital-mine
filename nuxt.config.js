const path = require('path')
const fs = require('fs')
const env = process.env.NODE_ENV

const envPath = path.resolve(
  process.cwd(),
  env !== 'development' ? `.env.${env}` : '.env.dev'
)
const defaultEnvPath = path.resolve(process.cwd(), '.env')

require('dotenv').config({
  path: fs.existsSync(envPath) ? envPath : defaultEnvPath
})

console.info(`Using ${env} environment variables`)

export default {
  server: {
    host: '0.0.0.0',
  },

  head: {
    title: 'Digital Mine',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/axios', '@nuxtjs/vuetify'],

  axios: {},

  env: {
    DIGITAL_MINE_DOMAIN: process.env.DIGITAL_MINE_DOMAIN,
    WOMPI_PUBLIC_KEY: process.env.WOMPI_PUBLIC_KEY
  },

  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
    },
  },
}
