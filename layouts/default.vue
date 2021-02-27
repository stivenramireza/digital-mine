<template>
  <v-app style="background: #455a64">
    <header>
      <Header />
    </header>
    <v-main>
      <Nuxt />
    </v-main>
    <footer>
      <Footer />
    </footer>
  </v-app>
</template>

<script>
import Header from '@/components/base/Header'
import Footer from '@/components/base/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
body,
html {
  overflow-x: hidden;
  font-family: 'Helvetica';
  font-size: 18px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
