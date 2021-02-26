<template>
  <v-container fluid ma-0 pa-0 fill-heigth color="blue-grey darken-4">
    <v-row class="w-50">
      <Carousel />
    </v-row>
    <v-row class="mt-2 services-container">
      <v-btn tile color="blue-grey darken-4 white--text" to="/servicios">
        <v-icon color="white" left> mdi-television </v-icon>
        Ver catálogo de servicios
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from '@/components/common/Carousel'

export default {
  components: {
    Carousel,
  },
}
</script>

<style scoped>
.services-container {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 20px;
}
</style>
