import { createClient } from 'contentful'

require('dotenv').config()

const routes = async function() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  })

  const post = await client.getEntries({
    content_type: 'post',
    limit: 1000
  })

  const tag = await client.getEntries({
    content_type: 'tag'
  })

  return [...post.items.map(item => `/entry/${item.sys.id}`), ...tag.items.map(item => `/tag/${item.sys.id}`)]
}

module.exports = {
  mode: 'universal',
  head: {
    title: '邦画だってさ',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  env: {
    SPACE_ID: process.env.SPACE_ID,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  },
  loading: false,
  css: ['@/assets/scss/index.scss'],
  modules: [
    [
      'nuxt-sass-resources-loader',
      ['@/assets/scss/foundation/_variables.scss', '@/assets/scss/foundation/_mixin.scss']
    ],
    ['@nuxtjs/google-analytics', { id: 'UA-53153991-19' }],
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  generate: {
    routes
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://blog.houga.cc',
    generate: true,
    routes
  },
  manifest: {
    name: '邦画だってさ',
    short_name: '邦画だってさ',
    lang: 'ja',
    orientation: 'portrait',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    start_url: '/index.html'
  },
  workbox: {
    dev: true
  }
}
