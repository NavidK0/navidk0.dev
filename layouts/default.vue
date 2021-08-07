<template>
  <div>
    <img class="watermark" alt="avatar" src="/images/navid_avatar.gif">
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from "~/components/Footer.vue";

export default Vue.extend({
  name: 'Default',

  components: {Footer},

  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: "NavidK0's Neat Place",
    meta: [
      {charset: 'utf-8'},
      {name: 'author', content: 'Navid Kabir'},
      {
        hid: 'description',
        name: 'description',
        content: 'Welcome.'
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

  methods: {
    getCopyright() {

    }
  }
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.watermark {
  position: fixed;
  bottom: -50px;
  left: 15px;
  width: 250px;
  height: 250px;
}
</style>
