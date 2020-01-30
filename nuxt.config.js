import { createClient } from 'contentful'
import { CONTENT_TYPE_POST, CONTENT_TYPE_TAG } from './config/constant'

require('dotenv').config()

const routes = async function() {
  const client = createClient({
    space: process.env.SPACE_ID || 'pf2aflscqgg2',
    accessToken: process.env.ACCESS_TOKEN || '672f6ef9cd1792652afa415fb353482f43f7267fd191ff488869528a70ed0ed1'
  })

  const [post, tag] = await Promise.all([
    client.getEntries({ content_type: CONTENT_TYPE_POST, limit: 1000 }),
    client.getEntries({ content_type: CONTENT_TYPE_TAG })
  ])

  return [...post.items.map(item => `/entry/${item.sys.id}`), ...tag.items.map(item => `/tag/${item.sys.id}`)]
}

const TITLE = '邦画だってさ'
const DESCRIPTION =
  'おもしろかった邦画の感想を書いていく予定です。まだ何も書けていないですが、順次追加していきます。たまには邦画も悪くないですよ。'

module.exports = {
  mode: 'universal',
  head: {
    title: TITLE,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'description',
        name: 'description',
        content: DESCRIPTION
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
      {
        property: 'og:site_name',
        content: TITLE
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: TITLE
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: DESCRIPTION
      },
      {
        property: 'og:image',
        content: 'https://blog.houga.cc/og.png?2018110601'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:image',
        content: 'https://blog.houga.cc/og.png?2018110601'
      }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
    ]
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
