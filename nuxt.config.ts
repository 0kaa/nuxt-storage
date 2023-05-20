// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        storage: {
            data: { driver: 'vercelKV' }
        }
    },

    modules: ["@nuxtjs/tailwindcss"]
})
