import { defineNuxtConfig } from 'nuxt'
import {articles} from './routes'
const routes = articles.map(data => `/detail/${data.id}`)
routes.push('/');
routes.push('/archive');
routes.push('/life');
routes.push('/skillSample');
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
module.exports = defineNuxtConfig({
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    "@nuxt3-graphql/urql",
  ],
  // vite:{
  //   server: {
  //     proxy:{
  //       '/upload_images': {
  //         target: 'https://upload-images.jianshu.io/upload_images',
  //         rewrite: (path: string) => path.replace(/^\/upload_images/, '')
  //       },
  //     }
  //   }
  // },
  urql: {
    url: "http://localhost:4000/graphql",
  },
  generate: {
    routes:routes,
    
  }
});









