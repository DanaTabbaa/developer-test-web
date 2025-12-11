// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  vite: {
  define: { 'process.env.NODE_ENV': '"development"' },
},
  devtools:{ enabled:true },
    css: [
    '~/assets/scss/main.scss'  ,
     'swiper/css',           // basic styles
    'swiper/css/navigation', // optional
    'swiper/css/pagination',  // optional 
    ]
})
