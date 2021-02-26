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
html {
  font-family: 'Helvetica';
  font-size: 18px;
}
</style>
